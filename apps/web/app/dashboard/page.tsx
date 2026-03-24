'use client';

import { useState, useEffect, useMemo } from 'react';
import Header from '../../components/Header';

export default function Dashboard() {
  const [movies, setMovies] = useState<any[]>([]);
  const [books, setBooks] = useState<any[]>([]);
  const [series, setSeries] = useState<any[]>([]);

  const fetchMedia = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login';
      return;
    }
    const headers = { 'Authorization': `Bearer ${token}` };
    
    try {
      const [resMovies, resBooks, resSeries] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies`, { headers }),
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/books`, { headers }),
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/series`, { headers })
      ]);
      if (resMovies.ok) setMovies(await resMovies.json());
      if (resBooks.ok) setBooks(await resBooks.json());
      if (resSeries.ok) setSeries(await resSeries.json());
    } catch(err) {
      console.error(err);
    }
  };

  useEffect(() => { fetchMedia(); }, []);

  // Calculate statistics
  const stats = useMemo(() => {
    const moviesWatched = movies.filter(m => m.status === 'assistido').length;
    const moviesNext = movies.filter(m => m.status === 'proximo').length;
    const moviesQueue = movies.filter(m => m.status === 'na_fila').length;
    
    const booksRead = books.filter(b => b.status === 'lido').length;
    const booksReading = books.filter(b => b.status === 'lendo').length;
    const booksNext = books.filter(b => b.status === 'proximo').length;
    const booksQueue = books.filter(b => b.status === 'na_fila').length;

    const seriesFinished = series.filter(s => s.status === 'finalizada').length;
    const seriesWatching = series.filter(s => s.status === 'assistindo').length;
    const seriesNext = series.filter(s => s.status === 'proximo').length;
    const seriesQueue = series.filter(s => s.status === 'na_fila').length;

    return {
      moviesWatched,
      moviesNext,
      moviesQueue,
      booksRead,
      booksReading,
      booksNext,
      booksQueue,
      seriesFinished,
      seriesWatching,
      seriesNext,
      seriesQueue,
    };
  }, [movies, books, series]);

  const StatCard = ({ title, value, colorClass }: { title: string, value: string | number, colorClass: string }) => (
    <div className={`neo-brutalist p-6 flex flex-col gap-2 ${colorClass}`}>
      <h3 className="font-bold text-sm uppercase tracking-wider">{title}</h3>
      <div className="text-5xl md:text-6xl font-black font-mono">{value}</div>
    </div>
  );

  return (
    <div className="flex flex-col h-full bg-[var(--color-background-primary)]">
      <div className="flex-1 p-6 md:pt-4 md:px-12 md:pb-12 max-w-7xl mx-auto w-full">
        {/* Movies Section */}
        <h2 className="text-base font-black mb-4 uppercase border-b-2 border-black inline-block pr-6">Movies Intelligence</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard title="Movies Watched" value={stats.moviesWatched} colorClass="bg-[var(--color-status-success)] text-black" />
          <StatCard title="Next Movies" value={stats.moviesNext} colorClass="bg-[var(--color-status-next)] text-white" />
          <StatCard title="Movies In Queue" value={stats.moviesQueue} colorClass="bg-[var(--color-status-queue)] text-black" />
        </div>

        {/* Books Section */}
        <h2 className="text-base font-black mb-4 uppercase border-b-2 border-black inline-block pr-6">Books Intelligence</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <StatCard title="Books Read" value={stats.booksRead} colorClass="bg-[var(--color-status-success)] text-black" />
          <StatCard title="Books Reading" value={stats.booksReading} colorClass="bg-[var(--color-status-ongoing)] text-white" />
          <StatCard title="Next Books" value={stats.booksNext} colorClass="bg-[var(--color-status-next)] text-white" />
          <StatCard title="Books In Queue" value={stats.booksQueue} colorClass="bg-[var(--color-status-queue)] text-black" />
        </div>

        {/* Series Section */}
        <h2 className="text-base font-black mb-4 uppercase border-b-2 border-black inline-block pr-6">Series Intelligence</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <StatCard title="Series Finished" value={stats.seriesFinished} colorClass="bg-[var(--color-status-success)] text-black" />
          <StatCard title="Series Watching" value={stats.seriesWatching} colorClass="bg-[var(--color-status-ongoing)] text-white" />
          <StatCard title="Next Series" value={stats.seriesNext} colorClass="bg-[var(--color-status-next)] text-white" />
          <StatCard title="Series In Queue" value={stats.seriesQueue} colorClass="bg-[var(--color-status-queue)] text-black" />
        </div>
      </div>
    </div>
  );
}
