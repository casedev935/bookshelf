import { PrismaClient } from './client';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();
const inputPath = path.join(__dirname, 'user_data_export.json');

async function main() {
  if (!fs.existsSync(inputPath)) {
    console.error(`❌ Error: Export file not found at ${inputPath}`);
    process.exit(1);
  }

  console.log(`📖 Reading export file...`);
  const data = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));
  const targetEmail = data.user.email;

  console.log(`🚀 Starting import for user: ${targetEmail}...`);

  // Target Database Check
  const user = await prisma.user.findUnique({
    where: { email: targetEmail }
  });

  if (!user) {
    console.error(`❌ Error: User with email "${targetEmail}" not found in target database.`);
    console.log(`⚠️  MANDATORY: You must create the user account in production before running this script.`);
    process.exit(1);
  }

  // --- MOVIES ---
  console.log(`📥 Processing ${data.movies.length} movies...`);
  let moviesCreated = 0;
  let moviesUpdated = 0;

  for (const movie of data.movies) {
    let categoryId: number | null = null;
    if (movie.category) {
      const category = await prisma.category.upsert({
        where: { name_type: { name: movie.category, type: 'movie' } },
        update: {},
        create: { name: movie.category, type: 'movie' }
      });
      categoryId = category.id;
    }

    const existing = await prisma.movie.findFirst({
        where: { user_id: user.id, title: movie.title }
    });

    if (existing) {
        await prisma.movie.update({
            where: { id: existing.id },
            data: {
                release_year: movie.release_year,
                director: movie.director,
                poster_url: movie.poster_url,
                status: movie.status,
                watched_at: movie.watched_at ? new Date(movie.watched_at) : null,
                category_id: categoryId
            }
        });
        moviesUpdated++;
    } else {
        await prisma.movie.create({
            data: {
                user_id: user.id,
                title: movie.title,
                release_year: movie.release_year,
                director: movie.director,
                poster_url: movie.poster_url,
                status: movie.status,
                watched_at: movie.watched_at ? new Date(movie.watched_at) : null,
                category_id: categoryId
            }
        });
        moviesCreated++;
    }
  }

  // --- SERIES ---
  console.log(`📥 Processing ${data.series.length} series...`);
  let seriesCreated = 0;
  let seriesUpdated = 0;

  for (const s of data.series) {
    let categoryId: number | null = null;
    if (s.category) {
      const category = await prisma.category.upsert({
        where: { name_type: { name: s.category, type: 'series' } },
        update: {},
        create: { name: s.category, type: 'series' }
      });
      categoryId = category.id;
    }

    const existing = await prisma.series.findFirst({
        where: { user_id: user.id, title: s.title }
    });

    if (existing) {
        await prisma.series.update({
            where: { id: existing.id },
            data: {
                release_year: s.release_year,
                poster_url: s.poster_url,
                status: s.status,
                category_id: categoryId
            }
        });
        seriesUpdated++;
    } else {
        await prisma.series.create({
            data: {
                user_id: user.id,
                title: s.title,
                release_year: s.release_year,
                poster_url: s.poster_url,
                status: s.status,
                category_id: categoryId
            }
        });
        seriesCreated++;
    }
  }

  console.log(`\n🎉 Import complete!`);
  console.log(`-----------------------------------`);
  console.log(`Movies: ${moviesCreated} created, ${moviesUpdated} updated.`);
  console.log(`Series: ${seriesCreated} created, ${seriesUpdated} updated.`);
  console.log(`-----------------------------------`);
}

main()
  .catch(e => {
    console.error('❌ Error during import:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
