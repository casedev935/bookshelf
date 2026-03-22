import { PrismaClient } from '@prisma/client';
import xlsx from 'xlsx';
const { readFile, utils } = xlsx;
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();
const userId = '54388800-5f7d-4b3c-b8e2-dac9d70914e8';
const excelPath = '/Users/georgecase/Documents/projetos/bookshelf/.contexto/FILMES.xlsx';

async function main() {
  const workbook = readFile(excelPath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows: any[] = utils.sheet_to_json(sheet);

  console.log(`Processing ${rows.length} rows...`);

  let added = 0;
  let skipped = 0;

  for (const row of rows) {
    const { Title, Year } = row;

    if (!Title) continue;

    const releaseYear = Year ? parseInt(Year) : null;

    // Check if movie already exists for this user
    const existing = await prisma.movie.findFirst({
      where: {
        user_id: userId,
        title: Title,
        release_year: releaseYear,
      },
    });

    if (existing) {
      console.log(`⏩ Skipping duplicate: ${Title} (${releaseYear})`);
      skipped++;
      continue;
    }

    await prisma.movie.create({
      data: {
        user_id: userId,
        title: Title,
        release_year: releaseYear,
        status: 'na_fila',
        category_id: null,
      },
    });
    added++;
    if (added % 10 === 0) console.log(`Processed ${added} movies...`);
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
