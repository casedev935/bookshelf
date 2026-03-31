'use client';

import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'next/navigation';
import MediaCard from '../../../components/MediaCard';

export default function PublicProfilePage() {
  const { username } = useParams();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [layoutMode, setLayoutMode] = useState<'grid' | 'row'>('row');
  const [activeTab, setActiveTab] = useState<'MOVIES' | 'BOOKS' | 'SERIES'>('MOVIES');
  const [showFilters, setShowFilters] = useState(false);
  
  const [filterTitle, setFilterTitle] = useState('');
  const [filterYear, setFilterYear] = useState('');
  const [filterAuthor, setFilterAuthor] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

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

  // Extract unique categories from data based on current tab
  const availableCategories = useMemo(() => {
    if (!data) return [];
    const key = activeTab.toLowerCase() as 'movies' | 'books' | 'series';
    const items = data[key] || [];
    const cats = new Set<string>();
    items.forEach((item: any) => {
      if (item.category?.name) cats.add(item.category.name);
    });
    return Array.from(cats).sort();
  }, [data, activeTab]);

  const items = useMemo(() => {
    if (!data) return [];
    const sourceItems = activeTab === 'MOVIES' 
        ? (data.movies || []).map((m: any) => ({ ...m, mediaType: 'movie' }))
        : activeTab === 'BOOKS' 
            ? (data.books || []).map((m: any) => ({ ...m, mediaType: 'book' }))
            : (data.series || []).map((s: any) => ({ ...s, mediaType: 'series' }));

    const filtered = sourceItems.filter((b: any) => {
        const matchTitle = b.title.toLowerCase().includes(filterTitle.toLowerCase());
        const matchYear = filterYear ? String(b.release_year) === filterYear : true;
        
        // Handle Author/Director
        const authorField = activeTab === 'MOVIES' ? b.director : b.author;
        const matchAuthor = filterAuthor ? (authorField || '').toLowerCase().includes(filterAuthor.toLowerCase()) : true;
        
        const matchCategory = filterCategory ? (b.category?.name || '').toLowerCase().includes(filterCategory.toLowerCase()) : true;
        
        return matchTitle && matchYear && matchAuthor && matchCategory;
    });

    // Sorting Logic based on type
    return filtered.sort((a: any, b: any) => {
        let priority: Record<string, number> = {};
        if (activeTab === 'MOVIES') priority = { 'proximo': 0, 'assistido': 1, 'na_fila': 2 };
        else if (activeTab === 'BOOKS') priority = { 'lendo': 0, 'proximo': 1, 'na_fila': 2, 'lido': 3 };
        else if (activeTab === 'SERIES') priority = { 'assistindo': 0, 'proximo': 1, 'na_fila': 2, 'finalizada': 3 };

        const pA = priority[a.status || ''] ?? 99;
        const pB = priority[b.status || ''] ?? 99;
        if (pA !== pB) return pA - pB;
        
        return (a.release_year || 0) - (b.release_year || 0);
    });
  }, [data, activeTab, filterTitle, filterYear, filterAuthor, filterCategory]);

  if (loading) return (
    <div className="h-screen w-full flex items-center justify-center bg-[var(--color-background-primary)]">
      <div className="font-mono font-black text-xl animate-pulse italic uppercase">LOADING_COLLECTION...</div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[var(--color-background-primary)] p-6 text-center">
      <div className="neo-brutalist p-8 max-w-md w-full">
        <h1 className="text-4xl font-black mb-4">404</h1>
        <p className="font-mono font-bold text-red-600 uppercase">ACCESS_DENIED: PROBABLY PRIVATE OR NOT FOUND.</p>
      </div>
    </div>
  );

  const userInitial = data?.name ? data.name.charAt(0).toUpperCase() : '?';

  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] flex flex-col items-center overflow-x-hidden">
      {/* Public Header */}
      <div className="w-full bg-[var(--color-card-bg)] border-b-4 border-[var(--color-text-primary)] p-4 sm:p-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 sm:border-4 border-[var(--color-text-primary)] bg-[var(--color-accent)] flex items-center justify-center font-black text-xl sm:text-2xl text-[var(--color-card-bg)] overflow-hidden shrink-0">
            {data?.profile_picture_url ? (
              <img src={data.profile_picture_url} alt={data.name} className="w-full h-full object-cover" />
            ) : (
              <span>{userInitial}</span>
            )}
          </div>
          <div className="flex flex-col min-w-0">
            <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight truncate w-full">{data?.name}'s COLLECTION</h1>
            <span className="font-mono text-[10px] sm:text-xs font-bold text-gray-500 truncate">BY @{data?.username}</span>
          </div>
        </div>
        
        <div className="flex items-center w-full md:w-auto mt-2 md:mt-0">
            <div className="neo-brutalist text-[var(--color-card-bg)] bg-[var(--color-text-primary)] px-3 py-1.5 text-[10px] sm:text-sm font-black italic whitespace-nowrap">PUBLIC_VIEW (READ-ONLY)</div>
        </div>
      </div>

      <div className="w-full max-w-7xl p-4 md:p-8 flex flex-col gap-6 sm:gap-10">
        {/* Navigation & Toolbar */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full">
            <div className="flex flex-nowrap overflow-x-auto gap-2 pb-2 sm:pb-0 scrollbar-hide snap-x w-full">
              {['MOVIES', 'BOOKS', 'SERIES'].map(tab => (
                <button
                  key={tab}
                  onClick={() => {
                      setActiveTab(tab as any);
                      setFilterCategory(''); // Reset category when switching tabs
                  }}
                  className={`neo-brutalist px-5 py-2 text-sm sm:text-base font-black transition-colors whitespace-nowrap snap-start shrink-0 ${activeTab === tab ? 'bg-[var(--color-text-primary)] text-[var(--color-card-bg)]' : 'hover:bg-[var(--color-card-hover)]'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <div className="flex-1 hidden sm:block" />

            <div className="flex gap-2 w-full sm:w-auto shrink-0 justify-between sm:justify-end">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`neo-brutalist p-2 flex items-center justify-center min-w-[44px] flex-1 sm:hidden transition-colors ${showFilters ? 'bg-[var(--color-text-primary)] text-[var(--color-card-bg)]' : 'hover:bg-[var(--color-card-hover)]'}`}
                title="Toggle Filters"
              >
                <div className="flex items-center gap-2 font-black text-xs uppercase">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                  <span>Filters</span>
                </div>
              </button>

              <button
                onClick={() => setLayoutMode(p => p === 'grid' ? 'row' : 'grid')}
                className="neo-brutalist neo-brutalist-button-secondary p-2 flex items-center justify-center min-w-[44px] flex-1 sm:flex-none"
                title="Toggle Layout"
              >
                 {layoutMode === 'grid' ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
                 ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                 )}
              </button>
            </div>
          </div>

          {/* Filtering Toolbar */}
          <div className={`neo-brutalist p-3 md:flex-row items-end flex-col sm:flex-row gap-3 ${showFilters ? 'flex' : 'hidden sm:flex'}`}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 flex-grow w-full">
              <div className="flex flex-col gap-1 w-full">
                <label className="text-[10px] font-black uppercase tracking-wider ml-1">Title</label>
                <input type="text" placeholder="Title..." className="neo-brutalist-input py-2 text-sm" value={filterTitle} onChange={e => setFilterTitle(e.target.value)} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-black uppercase tracking-wider ml-1">Year</label>
                <input type="number" placeholder="Year" className="neo-brutalist-input py-2 text-sm" value={filterYear} onChange={e => setFilterYear(e.target.value)} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-black uppercase tracking-wider ml-1">{activeTab === 'MOVIES' ? 'Director' : 'Author'}</label>
                <input type="text" placeholder={activeTab === 'MOVIES' ? 'Director' : 'Author'} className="neo-brutalist-input py-2 text-sm" value={filterAuthor} onChange={e => setFilterAuthor(e.target.value)} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-black uppercase tracking-wider ml-1">Category</label>
                <select 
                  className="neo-brutalist-input py-2 text-sm bg-white cursor-pointer" 
                  value={filterCategory} 
                  onChange={e => setFilterCategory(e.target.value)}
                >
                  <option value="">ALL CATEGORIES</option>
                  {availableCategories.map(cat => (
                    <option key={cat} value={cat}>{cat.toUpperCase()}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <button
               onClick={() => {
                 setFilterTitle('');
                 setFilterYear('');
                 setFilterAuthor('');
                 setFilterCategory('');
               }}
               className="neo-brutalist neo-brutalist-button-secondary p-2 flex items-center justify-center min-w-[44px] w-full md:w-auto h-full min-h-[44px]"
               title="Clear Filters"
            >
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>
        </div>

        {/* Content List */}
        <div className={layoutMode === 'grid'
          ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5"
          : "flex flex-col gap-3"}>
          {items.map((m: any) => (
            <MediaCard
              key={m.id}
              media={m}
              layoutMode={layoutMode}
              isReadOnly={true}
            />
          ))}

          {items.length === 0 && (
            <div className="col-span-full text-center p-12 sm:p-20 neo-brutalist font-black font-mono text-gray-400 border-dashed uppercase text-sm w-full">
              NO {activeTab} FOUND MATCHING CRITERIA.
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
