'use client';

import { useState, useEffect, useMemo } from 'react';
import Header from '../../../components/Header';
import MediaCard from '../../../components/MediaCard';
import MediaModal from '../../../components/MediaModal';
import MediaPreviewModal from '../../../components/MediaPreviewModal';
import { exportToExcel, mapMediaForExport } from '../../../lib/exportUtils';

export default function MoviesPage() {
  const [movies, setMovies] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingMedia, setEditingMedia] = useState<any>(null);
  const [previewMedia, setPreviewMedia] = useState<any>(null);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  const [isExportModalOpen, setExportModalOpen] = useState(false);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterYear, setFilterYear] = useState('');
  const [filterDirector, setFilterDirector] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [layoutMode, setLayoutMode] = useState<'grid' | 'row'>('row');

  const fetchMedia = async () => {
    const token = localStorage.getItem('token');
    if (!token) { window.location.href = '/login'; return; }
    const headers = { 'Authorization': `Bearer ${token}` };
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies`, { headers });
      if (res.ok) setMovies(await res.json());
    } catch(err) { console.error(err); }
  };

  const fetchCategories = async () => {
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': `Bearer ${token}` };
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories?type=movie`, { headers });
      if (res.ok) setCategories(await res.json());
    } catch(err) { console.error(err); }
  };

  useEffect(() => { 
    fetchMedia(); 
    fetchCategories();
  }, []);

  const handleSave = async (data: any) => {
    const token = localStorage.getItem('token');
    const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/movies${editingMedia ? `/${editingMedia.id}` : ''}`;
    const method = editingMedia ? 'PATCH' : 'POST';
    const res = await fetch(endpoint, {
      method,
      headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Failed to save movie');
    }
    
    setModalOpen(false);
    fetchMedia();
  };

  const handleExport = () => {
    const exportData = mapMediaForExport(movies, 'movie');
    exportToExcel(exportData, 'movies_list', 'Movies');
    setExportModalOpen(false);
  };

  const handleDelete = async () => {
    if (!itemToDelete) return;
    const token = localStorage.getItem('token');
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies/${itemToDelete}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    setItemToDelete(null);
    fetchMedia();
  };

  const uniqueDirectors = useMemo(() => {
    const directors = movies.map(m => m.director).filter(Boolean);
    return Array.from(new Set(directors)).sort();
  }, [movies]);

  const filteredMovies = useMemo(() =>
    movies.filter(m => {
      const matchTitle = m.title.toLowerCase().includes(filterTitle.toLowerCase());
      const matchYear = filterYear ? String(m.release_year) === filterYear : true;
      const matchDirector = filterDirector ? (m.director || '').toLowerCase().includes(filterDirector.toLowerCase()) : true;
      const matchCategory = filterCategory ? (m.category?.name || '').toLowerCase().includes(filterCategory.toLowerCase()) : true;
      return matchTitle && matchYear && matchDirector && matchCategory;
    }).map(m => ({ ...m, mediaType: 'movie' })),
  [movies, filterTitle, filterYear, filterDirector, filterCategory]);

  return (
    <div className="flex flex-col h-full w-full bg-[var(--color-background-primary)] overflow-y-auto">
      <Header title="Movies Database" />

      <div className="px-4 md:px-0 w-full flex-1 pb-12">
        {/* Simplified Toolbar */}
        <div className="neo-brutalist bg-white p-2 mb-6 flex flex-wrap md:flex-nowrap items-end gap-2">
          {/* Inputs Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 flex-grow">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-black uppercase tracking-wider ml-1">Title</label>
              <input type="text" placeholder="Title..." className="neo-brutalist-input py-2 text-sm" value={filterTitle} onChange={e => setFilterTitle(e.target.value)} />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-black uppercase tracking-wider ml-1">Year</label>
              <input type="number" placeholder="Year" className="neo-brutalist-input py-2 text-sm" value={filterYear} onChange={e => setFilterYear(e.target.value)} />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-black uppercase tracking-wider ml-1">Director</label>
              <input 
                type="text" 
                list="directors-list"
                placeholder="Director" 
                className="neo-brutalist-input py-2 text-sm" 
                value={filterDirector} 
                onChange={e => setFilterDirector(e.target.value)} 
              />
              <datalist id="directors-list">
                {uniqueDirectors.map(d => (
                  <option key={d} value={d} />
                ))}
              </datalist>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-black uppercase tracking-wider ml-1">Category</label>
              <select 
                className="neo-brutalist-input py-2 text-sm bg-white cursor-pointer" 
                value={filterCategory} 
                onChange={e => setFilterCategory(e.target.value)}
              >
                <option value="">ALL CATEGORIES</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.name}>{cat.name.toUpperCase()}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Actions Column */}
          <div className="flex gap-2 w-full md:w-auto mt-2 md:mt-0">
            <button
              onClick={() => setLayoutMode(p => p === 'grid' ? 'row' : 'grid')}
              className="neo-brutalist-button bg-white text-black border-2 border-black p-2 hover:bg-gray-100 flex-1 md:flex-none flex items-center justify-center min-w-[44px]"
              title="Toggle Layout"
            >
              {layoutMode === 'grid' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              )}
            </button>
            <button
              onClick={() => { setEditingMedia(null); setModalOpen(true); }}
              className="neo-brutalist-button p-2 px-6 font-black bg-[#137fec] text-white flex-1 md:flex-none flex items-center justify-center text-xl"
              title="Add Movie"
            >
              +
            </button>
            <button
              onClick={() => setExportModalOpen(true)}
              className="neo-brutalist-button p-2 px-4 font-black bg-[#22c55e] text-white flex-1 md:flex-none flex items-center justify-center"
              title="Export to Excel"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              <span className="ml-2 text-xs uppercase hidden md:inline">Export</span>
            </button>
          </div>
        </div>

        {/* Sorted Media List (Grouped by Status/Category silently) */}
        <div className={layoutMode === 'grid'
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 gap-6"
          : "flex flex-col gap-4"}>
          {filteredMovies.sort((a, b) => {
            // Priority Map (Opção A)
            const priority: Record<string, number> = { 'proximo': 0, 'assistido': 1, 'na_fila': 2 };
            const pA = priority[a.status || ''] ?? 99;
            const pB = priority[b.status || ''] ?? 99;
            if (pA !== pB) return pA - pB;
            
            return (a.release_year || 0) - (b.release_year || 0);
          }).map(m => (
            <MediaCard
              key={m.id}
              media={m}
              layoutMode={layoutMode}
              onPreview={setPreviewMedia}
              onEdit={() => { setEditingMedia(m); setModalOpen(true); }}
              onDelete={(id: string) => setItemToDelete(id)}
            />
          ))}

          {filteredMovies.length === 0 && (
            <div className="col-span-full text-center p-12 bg-white neo-brutalist text-gray-400 font-bold font-mono">
              NO MOVIES FOUND MATCHING CRITERIA.
            </div>
          )}
        </div>
      </div>

      <MediaModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        title={`${editingMedia ? 'EDIT' : 'ADD'} MOVIE`}
        type="movie"
        initialData={editingMedia}
      />

      <MediaPreviewModal
        isOpen={!!previewMedia}
        onClose={() => setPreviewMedia(null)}
        media={previewMedia}
        onEdit={(m: any) => { setEditingMedia(m); setModalOpen(true); }}
      />

      {itemToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setItemToDelete(null)} />
          <div className="neo-brutalist bg-white w-full max-w-sm z-10 p-6 flex flex-col gap-4">
            <h2 className="text-xl font-black uppercase font-sans tracking-tight border-b-2 border-black pb-2 text-red-600">CONFIRM DELETION</h2>
            <p className="font-mono text-sm font-bold">Are you sure you want to delete this movie? This action cannot be undone.</p>
            <div className="flex justify-end gap-3 mt-4">
              <button onClick={() => setItemToDelete(null)} className="neo-brutalist-button-secondary font-bold">CANCEL</button>
              <button onClick={handleDelete} className="neo-brutalist-button px-6 font-black bg-red-600 text-white hover:bg-red-700">DELETE</button>
            </div>
          </div>
        </div>
      )}

      {isExportModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setExportModalOpen(false)} />
          <div className="neo-brutalist bg-white w-full max-w-sm z-10 p-6 flex flex-col gap-4">
            <h2 className="text-xl font-black uppercase font-sans tracking-tight border-b-2 border-black pb-2 text-[#22c55e]">EXPORT LIST</h2>
            <p className="font-mono text-sm font-bold text-black">Are you sure you want to export your entire movie list to Excel (.xlsx)?</p>
            <div className="flex justify-end gap-3 mt-4">
              <button onClick={() => setExportModalOpen(false)} className="neo-brutalist-button-secondary font-bold">CANCEL</button>
              <button 
                onClick={handleExport} 
                className="neo-brutalist-button px-6 font-black bg-[#22c55e] text-white hover:bg-[#16a34a]"
              >
                CONFIRM
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
