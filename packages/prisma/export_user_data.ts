import { PrismaClient } from './client';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();
const userEmail = 'case.dev@outlook.com';

async function main() {
  console.log(`🔍 Finding user: ${userEmail}...`);
  
  const user = await prisma.user.findUnique({
    where: { email: userEmail },
    include: {
      movies: {
        include: { category: true }
      },
      series: {
        include: { category: true }
      }
    }
  });

  if (!user) {
    console.error(`❌ User with email ${userEmail} not found.`);
    process.exit(1);
  }

  const exportData = {
    metadata: {
      exported_at: new Date().toISOString(),
      source_user_email: user.email,
    },
    user: {
      email: user.email,
      name: user.name,
      username: user.username,
    },
    movies: user.movies.map(m => ({
      title: m.title,
      release_year: m.release_year,
      director: m.director,
      poster_url: m.poster_url,
      status: m.status,
      watched_at: m.watched_at,
      category: m.category?.name
    })),
    series: user.series.map(s => ({
      title: s.title,
      release_year: s.release_year,
      poster_url: s.poster_url,
      status: s.status,
      category: s.category?.name
    }))
  };

  const outputPath = path.join(__dirname, 'user_data_export.json');
  fs.writeFileSync(outputPath, JSON.stringify(exportData, null, 2));

  console.log(`✅ Exported ${exportData.movies.length} movies and ${exportData.series.length} series.`);
  console.log(`📁 File saved to: ${outputPath}`);
}

main()
  .catch(e => {
    console.error('❌ Error during export:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
