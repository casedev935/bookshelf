import { PrismaClient } from '@prisma/client';
import xlsx from 'xlsx';
const { readFile, utils } = xlsx;
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();
const userId = '54388800-5f7d-4b3c-b8e2-dac9d70914e8';
const excelPath = '/Users/georgecase/Documents/projetos/bookshelf/.contexto/LIVROS.xlsx';

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
};

async function main() {
  const workbook = readFile(excelPath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows: any[] = utils.sheet_to_json(sheet);

  console.log(`Processing ${rows.length} rows...`);

  let added = 0;
  let skipped = 0;

  for (const row of rows) {
    const { TITLE, YEAR, AUTHOR, CATEGORIA, COVER_URL, STATUS } = row;

    if (!TITLE) continue;

    // Check if book already exists for this user
    const existing = await prisma.book.findFirst({
      where: {
        user_id: userId,
        title: TITLE,
        author: AUTHOR,
      },
    });

    if (existing) {
      console.log(`⏩ Skipping duplicate: ${TITLE} by ${AUTHOR}`);
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

    await prisma.book.create({
      data: {
        user_id: userId,
        title: TITLE,
        release_year: YEAR ? parseInt(YEAR) : null,
        author: AUTHOR,
        category_id: categoryId,
        cover_url: COVER_URL,
        status: status,
      },
    });
    added++;
    if (added % 10 === 0) console.log(`Processed ${added} books...`);
  }

  console.log(`\nImport complete!`);
  console.log(`✅ Added: ${added}`);
  console.log(`⏩ Skipped: ${skipped}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
