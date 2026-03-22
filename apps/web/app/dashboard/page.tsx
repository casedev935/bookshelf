'use client';

import { useState, useEffect, useMemo } from 'react';
import Header from '../../components/Header';

export default function Dashboard() {
  const [movies, setMovies] = useState<any[]>([]);
  const [books, setBooks] = useState<any[]>([]);

  const fetchMedia = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login';
      return;
    }
    const headers = { 'Authorization': `Bearer ${token}` };
    
    try {
      const [resMovies, resBooks] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies`, { headers }),
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/books`, { headers })
      ]);
      if (resMovies.ok) setMovies(await resMovies.json());
      if (resBooks.ok) setBooks(await resBooks.json());
    } catch(err) {
      console.error(err);
    }
  };

  useEffect(() => { fetchMedia(); }, []);

  // Calculate statistics
  const stats = useMemo(() => {
    const moviesWatched = movies.filter(m => m.status === 'assistido').length;
    const moviesQueue = movies.filter(m => m.status === 'na_fila').length;
    
    const booksRead = books.filter(b => b.status === 'lido').length;
    const booksReading = books.filter(b => b.status === 'lendo').length;
    const booksQueue = books.filter(b => b.status === 'na_fila').length;

    const totalReadingDays = books
      .filter(b => b.status === 'lido' && b.started_reading_at && b.finished_reading_at)
      .reduce((sum, b) => {
        const start = new Date(b.started_reading_at).getTime();
        const end = new Date(b.finished_reading_at).getTime();
        // If start and end are the same day, it counts as 1 day at least.
        const diffDays = Math.max(1, Math.ceil((end - start) / (1000 * 60 * 60 * 24)));
        return sum + diffDays;
      }, 0);

    return {
      moviesWatched,
      moviesQueue,
      booksRead,
      booksReading,
      booksQueue,
      totalReadingDays
    };
  }, [movies, books]);

  const StatCard = ({ title, value, colorClass }: { title: string, value: string | number, colorClass: string }) => (
    <div className={`neo-brutalist p-6 flex flex-col gap-2 ${colorClass}`}>
      <h3 className="font-bold text-sm uppercase tracking-wider">{title}</h3>
      <div className="text-5xl md:text-6xl font-black font-mono">{value}</div>
    </div>
  );

  return (
    <div className="flex flex-col h-full bg-[var(--color-background-primary)]">
      <Header title="Analytics Dashboard" />
      
      <div className="flex-1 p-6 md:p-12 max-w-7xl mx-auto w-full">
        {/* Movies Section */}
        <h2 className="text-2xl font-black mb-6 uppercase border-b-4 border-black inline-block pr-8">Movies Intelligence</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <StatCard title="Movies Watched" value={stats.moviesWatched} colorClass="bg-[#137fec] text-white" />
          <StatCard title="Movies In Queue" value={stats.moviesQueue} colorClass="bg-white" />
        </div>

        {/* Books Section */}
        <h2 className="text-2xl font-black mb-6 uppercase border-b-4 border-black inline-block pr-8">Books Intelligence</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard title="Books Read" value={stats.booksRead} colorClass="bg-[var(--color-status-ongoing)]" />
          <StatCard title="Books Reading" value={stats.booksReading} colorClass="bg-[var(--color-status-planning)]" />
          <StatCard title="Books In Queue" value={stats.booksQueue} colorClass="bg-white" />
        </div>

        {/* Grand Total Section */}
        <div className="grid grid-cols-1 gap-6 mt-8">
          <div className="neo-brutalist p-8 md:p-12 bg-black text-white flex flex-col items-center justify-center text-center">
            <h3 className="font-bold text-xl md:text-2xl uppercase tracking-wider text-gray-300 mb-4">Total Time Invested in Books</h3>
            <div className="text-6xl md:text-8xl font-black font-mono text-[var(--color-status-ongoing)]">
              {stats.totalReadingDays} <span className="text-3xl md:text-5xl">DAYS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
