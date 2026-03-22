const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Get existing users
  const users = await prisma.user.findMany({ take: 2 });
  if (users.length < 2) {
    console.error('❌ Need at least 2 registered users. Found:', users.length);
    process.exit(1);
  }
  const [user1, user2] = users;
  console.log(`👤 User 1: ${user1.name} (${user1.email})`);
  console.log(`👤 User 2: ${user2.name} (${user2.email})`);

  // ─── MOVIE CATEGORIES ───
  const movieCatNames = ['Action', 'Sci-Fi', 'Drama', 'Thriller', 'Comedy', 'Horror', 'Animation'];
  const movieCats = [];
  for (const name of movieCatNames) {
    const cat = await prisma.category.upsert({
      where: { name_type: { name, type: 'movie' } },
      update: {},
      create: { name, type: 'movie' },
    });
    movieCats.push(cat);
  }
  console.log(`🎬 ${movieCats.length} movie categories created`);

  // ─── BOOK CATEGORIES ───
  const bookCatNames = ['Fiction', 'Non-Fiction', 'Fantasy', 'Biography', 'Science', 'History', 'Self-Help'];
  const bookCats = [];
  for (const name of bookCatNames) {
    const cat = await prisma.category.upsert({
      where: { name_type: { name, type: 'book' } },
      update: {},
      create: { name, type: 'book' },
    });
    bookCats.push(cat);
  }
  console.log(`📚 ${bookCats.length} book categories created`);

  // ─── MOVIES ───
  const moviesData = [
    // User 1
    { user: user1, title: 'The Godfather', year: 1972, director: 'Francis Ford Coppola', cat: 'Drama', status: 'assistido', watched: '2023-01-15', poster: 'https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtOWQ3Ni00YmQ1LWE1NjYtZDc4NDgwMzk0ZDE5XkEyXkFqcGc@._V1_.jpg' },
    { user: user1, title: 'Inception', year: 2010, director: 'Christopher Nolan', cat: 'Sci-Fi', status: 'assistido', watched: '2022-06-20', poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg' },
    { user: user1, title: 'Pulp Fiction', year: 1994, director: 'Quentin Tarantino', cat: 'Thriller', status: 'assistido', watched: '2021-03-10', poster: 'https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_.jpg' },
    { user: user1, title: 'Superbad', year: 2007, director: 'Greg Mottola', cat: 'Comedy', status: 'assistido', watched: '2024-12-01', poster: 'https://m.media-amazon.com/images/M/MV5BNjkzMGU5MjUtYjU3OC00YjhhLThmMzItMjI5MTYwMzNhZTgyXkEyXkFqcGc@._V1_.jpg' },
    { user: user1, title: 'Get Out', year: 2017, director: 'Jordan Peele', cat: 'Horror', status: 'na_fila', watched: null, poster: 'https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg' },
    { user: user1, title: 'Spider-Man: Into the Spider-Verse', year: 2018, director: 'Peter Ramsey', cat: 'Animation', status: 'na_fila', watched: null, poster: 'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg' },
    { user: user1, title: 'John Wick', year: 2014, director: 'Chad Stahelski', cat: 'Action', status: 'assistido', watched: '2025-01-05', poster: 'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg' },
    { user: user1, title: 'Dune: Part Two', year: 2024, director: 'Denis Villeneuve', cat: 'Sci-Fi', status: 'na_fila', watched: null, poster: 'https://m.media-amazon.com/images/M/MV5BNTc0YmQxN2EtODY5MS00YjkzLWEzZDAtNWFlNDBiYTkxMGU2XkEyXkFqcGc@._V1_.jpg' },
    // User 2
    { user: user2, title: 'The Dark Knight', year: 2008, director: 'Christopher Nolan', cat: 'Action', status: 'assistido', watched: '2020-11-10', poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg' },
    { user: user2, title: 'Parasite', year: 2019, director: 'Bong Joon-ho', cat: 'Thriller', status: 'assistido', watched: '2023-08-25', poster: 'https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_.jpg' },
    { user: user2, title: 'The Shawshank Redemption', year: 1994, director: 'Frank Darabont', cat: 'Drama', status: 'assistido', watched: '2019-05-12', poster: 'https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg' },
    { user: user2, title: 'Interstellar', year: 2014, director: 'Christopher Nolan', cat: 'Sci-Fi', status: 'na_fila', watched: null, poster: 'https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg' },
    { user: user2, title: 'Toy Story', year: 1995, director: 'John Lasseter', cat: 'Animation', status: 'assistido', watched: '2024-06-15', poster: 'https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtMDQzZjBhMDM3NGExXkEyXkFqcGc@._V1_.jpg' },
    { user: user2, title: 'The Conjuring', year: 2013, director: 'James Wan', cat: 'Horror', status: 'na_fila', watched: null, poster: 'https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_.jpg' },
    { user: user2, title: 'The Hangover', year: 2009, director: 'Todd Phillips', cat: 'Comedy', status: 'assistido', watched: '2022-04-02', poster: 'https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctYjI5Mjg5MGJhM2UxXkEyXkFqcGc@._V1_.jpg' },
    { user: user2, title: 'Oppenheimer', year: 2023, director: 'Christopher Nolan', cat: 'Drama', status: 'na_fila', watched: null, poster: 'https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZjAtNDQ0NDNlNzY0MWRhXkEyXkFqcGc@._V1_.jpg' },
  ];

  for (const m of moviesData) {
    const cat = movieCats.find(c => c.name === m.cat);
    await prisma.movie.create({
      data: {
        user_id: m.user.id,
        title: m.title,
        release_year: m.year,
        director: m.director,
        category_id: cat?.id,
        poster_url: m.poster,
        status: m.status,
        watched_at: m.watched ? new Date(m.watched) : null,
      },
    });
  }
  console.log(`🎬 ${moviesData.length} movies created`);

  // ─── BOOKS ───
  const booksData = [
    // User 1
    { user: user1, title: '1984', year: 1949, author: 'George Orwell', cat: 'Fiction', status: 'lido', startedAt: '2023-01-10', finishedAt: '2023-01-25', cover: 'https://m.media-amazon.com/images/I/71rpa1-kyvL._SY466_.jpg' },
    { user: user1, title: 'Sapiens', year: 2011, author: 'Yuval Noah Harari', cat: 'Non-Fiction', status: 'lido', startedAt: '2023-03-01', finishedAt: '2023-04-15', cover: 'https://m.media-amazon.com/images/I/71N3-2sYDRL._SY466_.jpg' },
    { user: user1, title: 'The Hobbit', year: 1937, author: 'J.R.R. Tolkien', cat: 'Fantasy', status: 'lido', startedAt: '2024-06-01', finishedAt: '2024-06-20', cover: 'https://m.media-amazon.com/images/I/71jD4jMityL._SY466_.jpg' },
    { user: user1, title: 'Steve Jobs', year: 2011, author: 'Walter Isaacson', cat: 'Biography', status: 'lendo', startedAt: '2026-03-01', finishedAt: null, cover: 'https://m.media-amazon.com/images/I/81VStYnDGrL._SY466_.jpg' },
    { user: user1, title: 'A Brief History of Time', year: 1988, author: 'Stephen Hawking', cat: 'Science', status: 'na_fila', startedAt: null, finishedAt: null, cover: 'https://m.media-amazon.com/images/I/81pULAEBmRL._SY466_.jpg' },
    { user: user1, title: 'Atomic Habits', year: 2018, author: 'James Clear', cat: 'Self-Help', status: 'lido', startedAt: '2024-09-01', finishedAt: '2024-09-12', cover: 'https://m.media-amazon.com/images/I/81YkqyaFVEL._SY466_.jpg' },
    { user: user1, title: 'Guns, Germs, and Steel', year: 1997, author: 'Jared Diamond', cat: 'History', status: 'na_fila', startedAt: null, finishedAt: null, cover: 'https://m.media-amazon.com/images/I/71b3LiDXfOL._SY466_.jpg' },
    { user: user1, title: 'Dune', year: 1965, author: 'Frank Herbert', cat: 'Fiction', status: 'lendo', startedAt: '2026-02-15', finishedAt: null, cover: 'https://m.media-amazon.com/images/I/81zN7udGRUL._SY466_.jpg' },
    // User 2
    { user: user2, title: 'To Kill a Mockingbird', year: 1960, author: 'Harper Lee', cat: 'Fiction', status: 'lido', startedAt: '2022-07-01', finishedAt: '2022-07-14', cover: 'https://m.media-amazon.com/images/I/81aY1lxk+9L._SY466_.jpg' },
    { user: user2, title: 'Thinking, Fast and Slow', year: 2011, author: 'Daniel Kahneman', cat: 'Non-Fiction', status: 'lido', startedAt: '2023-05-10', finishedAt: '2023-06-20', cover: 'https://m.media-amazon.com/images/I/71wvKXWfcML._SY466_.jpg' },
    { user: user2, title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997, author: 'J.K. Rowling', cat: 'Fantasy', status: 'lido', startedAt: '2020-01-05', finishedAt: '2020-01-12', cover: 'https://m.media-amazon.com/images/I/81m1s4wIPML._SY466_.jpg' },
    { user: user2, title: 'Educated', year: 2018, author: 'Tara Westover', cat: 'Biography', status: 'lendo', startedAt: '2026-03-10', finishedAt: null, cover: 'https://m.media-amazon.com/images/I/81NwOj14S6L._SY466_.jpg' },
    { user: user2, title: 'Cosmos', year: 1980, author: 'Carl Sagan', cat: 'Science', status: 'na_fila', startedAt: null, finishedAt: null, cover: 'https://m.media-amazon.com/images/I/71lnwBdMlHL._SY466_.jpg' },
    { user: user2, title: 'The 48 Laws of Power', year: 1998, author: 'Robert Greene', cat: 'Self-Help', status: 'lido', startedAt: '2025-06-01', finishedAt: '2025-07-10', cover: 'https://m.media-amazon.com/images/I/71aG+xDKSYL._SY466_.jpg' },
    { user: user2, title: 'SPQR: A History of Ancient Rome', year: 2015, author: 'Mary Beard', cat: 'History', status: 'na_fila', startedAt: null, finishedAt: null, cover: 'https://m.media-amazon.com/images/I/91mA6mBOlbL._SY466_.jpg' },
    { user: user2, title: 'Brave New World', year: 1932, author: 'Aldous Huxley', cat: 'Fiction', status: 'lido', startedAt: '2024-11-01', finishedAt: '2024-11-18', cover: 'https://m.media-amazon.com/images/I/81zE42gT3xL._SY466_.jpg' },
  ];

  for (const b of booksData) {
    const cat = bookCats.find(c => c.name === b.cat);
    await prisma.book.create({
      data: {
        user_id: b.user.id,
        title: b.title,
        release_year: b.year,
        author: b.author,
        category_id: cat?.id,
        cover_url: b.cover,
        status: b.status,
        started_reading_at: b.startedAt ? new Date(b.startedAt) : null,
        finished_reading_at: b.finishedAt ? new Date(b.finishedAt) : null,
      },
    });
  }
  console.log(`📚 ${booksData.length} books created`);

  console.log('\n✅ Seed complete!');
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
