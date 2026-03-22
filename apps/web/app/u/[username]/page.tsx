'use client';

import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'next/navigation';
import MediaCard from '../../../components/MediaCard';

export default function PublicProfilePage() {
  const { username } = useParams();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [layoutMode, setLayoutMode] = useState<'grid' | 'row'>('grid');
  const [activeTab, setActiveTab] = useState<'MOVIES' | 'BOOKS' | 'SERIES'>('MOVIES');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/u/${username}`);
        if (!res.ok) {
          throw new Error('Public profile not found or private');
        }
        setData(await res.json());
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    if (username) fetchData();
  }, [username]);

  const items = useMemo(() => {
    if (!data) return [];
    if (activeTab === 'MOVIES') return (data.movies || []).map((m: any) => ({ ...m, mediaType: 'movie' }));
    if (activeTab === 'BOOKS') return (data.books || []).map((m: any) => ({ ...m, mediaType: 'book' }));
    if (activeTab === 'SERIES') return (data.series || []).map((s: any) => ({ ...s, mediaType: 'series' }));
    return [];
  }, [data, activeTab]);

  if (loading) return (
    <div className="h-screen w-full flex items-center justify-center bg-[var(--color-background-primary)]">
      <div className="font-mono font-black text-xl animate-pulse italic uppercase">LOADING_COLLECTION...</div>
    </div>
  );

  if (error) return (
    <div className="h-screen w-full flex items-center justify-center bg-[var(--color-background-primary)] p-6 text-center">
      <div className="neo-brutalist bg-white p-8 max-w-md">
        <h1 className="text-4xl font-black mb-4">404</h1>
        <p className="font-mono font-bold text-red-600 uppercase">ACCESS_DENIED: PROBABLY PRIVATE OR NOT FOUND.</p>
      </div>
    </div>
  );

  const userInitial = data?.name ? data.name.charAt(0).toUpperCase() : '?';

  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] flex flex-col items-center">
      {/* Public Header */}
      <div className="w-full bg-white border-b-4 border-black p-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full border-4 border-black bg-[var(--color-accent)] flex items-center justify-center font-black text-2xl text-white overflow-hidden shrink-0">
            {data?.profile_picture_url ? (
              <img src={data.profile_picture_url} alt={data.name} className="w-full h-full object-cover" />
            ) : (
              <span>{userInitial}</span>
            )}
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-black uppercase tracking-tight">{data?.name}'s COLLECTION</h1>
            <span className="font-mono text-xs font-bold text-gray-500">BY @{data?.username}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
            <div className="neo-brutalist bg-black text-white px-4 py-2 text-sm font-black italic">PUBLIC_VIEW (READ-ONLY)</div>
        </div>
      </div>

      <div className="w-full max-w-7xl p-4 md:p-8 flex flex-col gap-6">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2">
          {['MOVIES', 'BOOKS', 'SERIES'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`neo-brutalist px-6 py-2 font-black transition-colors ${activeTab === tab ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'}`}
            >
              {tab}
            </button>
          ))}
          
          <div className="flex-1" />

          <button
            onClick={() => setLayoutMode(p => p === 'grid' ? 'row' : 'grid')}
            className="neo-brutalist bg-white border-2 border-black p-2 hover:bg-gray-100"
          >
             {layoutMode === 'grid' ? 'ROW_VIEW' : 'GRID_VIEW'}
          </button>
        </div>

        {/* Content List */}
        <div className={layoutMode === 'grid'
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          : "flex flex-col gap-4"}>
          {items.map((m: any) => (
            <MediaCard
              key={m.id}
              media={m}
              layoutMode={layoutMode}
              isReadOnly={true}
            />
          ))}

          {items.length === 0 && (
            <div className="col-span-full text-center p-20 bg-white neo-brutalist font-black font-mono text-gray-400 border-dashed border-4 border-gray-200 uppercase">
              NO {activeTab} FOUND IN THIS PUBLIC COLLECTION.
            </div>
          )}
        </div>
      </div>

      <footer className="mt-auto p-12 text-center font-mono text-xs font-bold text-gray-400">
        POWERED BY BOOKSHELF | BUILD YOUR OWN AT GITHUB.COM
      </footer>
    </div>
  );
}
