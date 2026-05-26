import { PrismaClient } from '@prisma/client';
import xlsx from 'xlsx';
const { readFile, utils } = xlsx;
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();
const userId = '54388800-5f7d-4b3c-b8e2-dac9d70914e8';
const excelPath = path.join(__dirname, '../../context/LIVROS.xlsx');

const categoryMapping: Record<string, string> = {
  'BIOGRAFIA': 'Biography',
  'FILOSOFIA': 'Philosophy',
  'SOCIOLOGIA': 'Sociology',
  'PSICOLOGIA': 'Psychology',
  'HISTÓRIA - BRASIL': 'History - Brazil',
  'HISTÓRIA - GERAL': 'History - General',
  'HISTÓRIA - WW2': 'History - WWII',
  'HISTÓRIA - WW1': 'History - WWI',
  'HISTÓRIA - IDADE MÉDIA': 'History - Middle Ages',
  'HISTÓRIA - GUERRA FRIA': 'History - Cold War',
  'HISTÓRIA - IGREJA': 'History - Church',
  'HISTÓRIA - INGLESA': 'History - English',
  'HISTÓRIA - ECONÔMICA': 'History - Economic',
  'LITERATURA': 'Literature',
  'POEMAS': 'Poems',
  'CLÁSSICO': 'Classic',
  'ESTÉTICA': 'Aesthetics',
  'LEITURA ESPIRITUAL': 'Spiritual Reading',
  'DRAMA': 'Drama',
  'CURSOS': 'Courses',
  'FRANCÊS': 'French',
  'RUSSO': 'Russian',
  'MIMETISMO': 'Mimetismo',
  'LER EM SEGUIDA': 'Next to read',
};

const statusMapping: Record<string, any> = {
  'LIDO': 'lido',
  'NA_FILA': 'na_fila',
  'LENDO': 'lendo',
  'PROXIMO': 'proximo',
};

// Helper function to sleep between external API requests to prevent rate limiting
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchMetadata(title: string, author?: string) {
  const searchQuery = author ? `${title} ${author}` : title;
  
  // 1. Try Open Library
  try {
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(searchQuery)}&limit=1&fields=first_publish_year,cover_i`;
    const res = await fetch(url, { headers: { 'User-Agent': 'BookshelfApp/1.0' } });
    if (res.ok) {
      const data = await res.json();
      const doc = data.docs?.[0];
      if (doc) {
        return {
          release_year: doc.first_publish_year || null,
          cover_url: doc.cover_i ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg` : null,
          source: 'Open Library'
        };
      }
    }
  } catch (err: any) {
    console.warn(`[Warning] Open Library failed for "${title}":`, err.message);
  }

  // 2. Try Google Books Fallback
  try {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchQuery)}&maxResults=1`;
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      const item = data.items?.[0];
      const info = item?.volumeInfo;
      if (info) {
        let year: number | null = null;
        if (info.publishedDate) {
          const match = info.publishedDate.match(/^\d{4}/);
          if (match) {
            year = parseInt(match[0], 10);
          }
        }
        let coverUrl = null;
        if (info.imageLinks) {
          coverUrl = info.imageLinks.thumbnail || info.imageLinks.smallThumbnail || null;
          if (coverUrl) {
            coverUrl = coverUrl.replace(/^http:/, 'https:');
          }
        }
        return {
          release_year: year,
          cover_url: coverUrl,
          source: 'Google Books'
        };
      }
    }
  } catch (err: any) {
    console.error(`[Error] Google Books fallback failed for "${title}":`, err.message);
  }

  return null;
}

async function main() {
  console.log('Reading workbook from:', excelPath);
  const workbook = readFile(excelPath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows: any[] = utils.sheet_to_json(sheet);

  console.log(`Processing ${rows.length} rows...`);

  let added = 0;
  let skipped = 0;
  let enrichedCount = 0;

  for (const row of rows) {
    const { TITLE, AUTHOR, CATEGORIA, STATUS } = row;

    if (!TITLE) continue;

    // Check if book already exists for this user
    const existing = await prisma.book.findFirst({
      where: {
        user_id: userId,
        title: { equals: TITLE, mode: 'insensitive' },
      },
    });

    if (existing) {
      console.log(`⏩ Skipping duplicate: "${TITLE}"`);
      skipped++;
      continue;
    }

    // Get or Create Category
    let categoryId: number | null = null;
    if (CATEGORIA) {
      const catName = categoryMapping[CATEGORIA] || CATEGORIA;
      const category = await prisma.category.upsert({
        where: { name_type: { name: catName, type: 'book' } },
        update: {},
        create: { name: catName, type: 'book' },
      });
      categoryId = category.id;
    }

    // Map Status
    const status = statusMapping[STATUS] || 'na_fila';

    // Enrich metadata (fetch missing year and cover url)
    console.log(`🔍 Enriching: "${TITLE}" by ${AUTHOR || 'Unknown'}...`);
    const metadata = await fetchMetadata(TITLE, AUTHOR);
    
    let release_year: number | null = null;
    let cover_url: string | null = null;
    
    if (metadata) {
      release_year = metadata.release_year;
      cover_url = metadata.cover_url;
      enrichedCount++;
      console.log(`   ✨ Found via ${metadata.source}: Year=${release_year}, Cover=${cover_url ? 'Yes' : 'No'}`);
    } else {
      console.log(`   ⚠️ No metadata found.`);
    }

    await prisma.book.create({
      data: {
        user_id: userId,
        title: TITLE,
        release_year: release_year,
        author: AUTHOR || 'Unknown',
        category_id: categoryId,
        cover_url: cover_url,
        status: status,
      },
    });
    added++;
    
    // Polite delay to avoid aggressive calling of Open Library and Google Books
    await delay(350);
  }

  console.log(`\nImport complete!`);
  console.log(`✅ Added: ${added}`);
  console.log(`✨ Enriched: ${enrichedCount}`);
  console.log(`⏩ Skipped duplicates: ${skipped}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
