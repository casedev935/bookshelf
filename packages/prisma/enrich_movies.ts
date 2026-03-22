import { PrismaClient } from '@prisma/client';
import axios from 'axios';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from root
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const prisma = new PrismaClient();
const userId = '54388800-5f7d-4b3c-b8e2-dac9d70914e8';
const tmdbApiKey = process.env.TMDB_API_KEY;
const tmdbBaseUrl = 'https://api.themoviedb.org/3';

async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  if (!tmdbApiKey) {
    console.error('TMDB_API_KEY not found in .env');
    process.exit(1);
  }

  const movies = await prisma.movie.findMany({
    where: {
      user_id: userId,
      OR: [
        { director: null },
        { poster_url: null },
      ],
    },
  });

  console.log(`Enriching ${movies.length} movies...`);

  let enriched = 0;
  let notFound = 0;

  for (const movie of movies) {
    try {
      console.log(`🔍 Searching: "${movie.title}" (${movie.release_year})...`);
      
      const searchResponse = await axios.get(`${tmdbBaseUrl}/search/movie`, {
        params: {
          api_key: tmdbApiKey,
          query: movie.title,
          year: movie.release_year,
          language: 'pt-BR',
        },
      });

      const results = searchResponse.data.results;
      if (results && results.length > 0) {
        const bestMatch = results[0];
        const tmdbId = bestMatch.id;

        // Get Credits for Director
        const creditsResponse = await axios.get(`${tmdbBaseUrl}/movie/${tmdbId}/credits`, {
          params: { api_key: tmdbApiKey },
        });

        const director = creditsResponse.data.crew.find((p: any) => p.job === 'Director')?.name;
        const posterUrl = bestMatch.poster_path ? `https://image.tmdb.org/t/p/w500${bestMatch.poster_path}` : null;

        await prisma.movie.update({
          where: { id: movie.id },
          data: {
            director: director || 'Unknown',
            poster_url: posterUrl,
          },
        });

        console.log(`✅ Enriched: ${movie.title} - Dir: ${director}`);
        enriched++;
      } else {
        console.log(`❌ Not found on TMDB: ${movie.title}`);
        notFound++;
      }

      // 500ms delay to avoid rate limits
      await delay(500);
    } catch (error: any) {
      console.error(`Error enriching ${movie.title}:`, error.message);
      if (error.response?.status === 429) {
        console.log('Rate limit hit, waiting 5 seconds...');
        await delay(5000);
      }
    }
  }

  console.log(`\nEnrichment complete!`);
  console.log(`✅ Enriched: ${enriched}`);
  console.log(`❌ Not Found: ${notFound}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
