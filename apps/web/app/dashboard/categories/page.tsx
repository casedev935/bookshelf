'use client';

import { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import { getCategoryColor } from '../../../lib/colorUtils';

export default function CategoriesPage() {
  const [movieCategories, setMovieCategories] = useState<any[]>([]);
  const [bookCategories, setBookCategories] = useState<any[]>([]);
  const [newMovieCategory, setNewMovieCategory] = useState('');
  const [newBookCategory, setNewBookCategory] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingName, setEditingName] = useState('');
  const [itemToDelete, setItemToDelete] = useState<number | null>(null);

  const getHeaders = (): Record<string, string> => {
    const token = localStorage.getItem('token');
    if (!token) { window.location.href = '/login'; return {}; }
    return { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' };
  };

  const fetchCategories = async () => {
    const headers = getHeaders();
    try {
      const [resMovie, resBook] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories?type=movie`, { headers }),
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories?type=book`, { headers })
      ]);
      if (resMovie.ok) setMovieCategories(await resMovie.json());
      if (resBook.ok) setBookCategories(await resBook.json());
    } catch (err) { console.error(err); }
  };

  useEffect(() => { fetchCategories(); }, []);

  const handleCreate = async (type: 'movie' | 'book') => {
    const name = type === 'movie' ? newMovieCategory.trim() : newBookCategory.trim();
    if (!name) return;
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ name, type })
    });
    type === 'movie' ? setNewMovieCategory('') : setNewBookCategory('');
    fetchCategories();
  };

  const handleUpdate = async (id: number) => {
    if (!editingName.trim()) return;
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`, {
      method: 'PATCH',
      headers: getHeaders(),
      body: JSON.stringify({ name: editingName.trim() })
    });
    setEditingId(null);
    setEditingName('');
    fetchCategories();
  };

  const handleDelete = async () => {
    if (itemToDelete === null) return;
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories/${itemToDelete}`, {
      method: 'DELETE',
      headers: getHeaders()
    });
    setItemToDelete(null);
    fetchCategories();
  };

  const startEditing = (cat: any) => {
    setEditingId(cat.id);
    setEditingName(cat.name);
  };

  const CategoryCard = ({ cat }: { cat: any }) => (
    <div 
      className="neo-brutalist p-1 flex items-center gap-2 group transition-all" 
      style={{ backgroundColor: getCategoryColor(cat.name) }}
    >
      {editingId === cat.id ? (
        <form onSubmit={(e) => { e.preventDefault(); handleUpdate(cat.id); }} className="flex items-center gap-1">
          <input
            type="text"
            className="neo-brutalist-input py-0 px-2 text-[10px] font-mono font-black h-6 w-24 bg-white/50"
            value={editingName}
            onChange={e => setEditingName(e.target.value)}
            autoFocus
          />
          <button type="submit" className="neo-brutalist-button p-1 bg-black text-white" title="Save">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </button>
          <button type="button" onClick={() => setEditingId(null)} className="neo-brutalist-button-secondary p-1" title="Cancel">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </form>
      ) : (
        <>
          <span className="text-[10px] font-mono font-black px-1 tracking-widest uppercase truncate max-w-[120px]" title={cat.name}>
            {cat.name}
          </span>
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity pr-1">
            <button onClick={() => startEditing(cat)} className="hover:scale-110 transition-transform" title="Edit">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
              </svg>
            </button>
            <button onClick={() => setItemToDelete(cat.id)} className="hover:scale-110 transition-transform text-red-700" title="Delete">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  );

  return (
    <div className="flex flex-col h-full w-full bg-[var(--color-background-primary)] overflow-y-auto">
      <Header title="Categories Manager" />

      <div className="px-4 md:px-0 w-full flex-1 pb-12 flex flex-col gap-10">
        {/* MOVIE CATEGORIES */}
        <section>
          <div className="flex items-center justify-between mb-4 border-b-4 border-black pb-2">
            <h2 className="text-xl font-black uppercase tracking-tight">🎬 Movie Categories</h2>
          </div>
          {/* Add new */}
          <form onSubmit={(e) => { e.preventDefault(); handleCreate('movie'); }} className="neo-brutalist bg-white p-2 mb-6 flex items-end gap-2">
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-[10px] font-black uppercase tracking-wider ml-1">New Category</label>
              <input type="text" placeholder="Action, Sci-Fi..." className="neo-brutalist-input py-2 text-sm" value={newMovieCategory} onChange={e => setNewMovieCategory(e.target.value)} />
            </div>
            <button type="submit" className="neo-brutalist-button p-2 px-6 font-black bg-[#137fec] text-white text-xl">+</button>
          </form>
          {/* Grid */}
          <div className="flex flex-wrap gap-3">
            {movieCategories.map(cat => <CategoryCard key={cat.id} cat={cat} />)}
            {movieCategories.length === 0 && (
              <div className="w-full text-center p-8 bg-white neo-brutalist text-gray-400 font-bold font-mono text-sm">
                NO MOVIE CATEGORIES YET.
              </div>
            )}
          </div>
        </section>

        {/* BOOK CATEGORIES */}
        <section>
          <div className="flex items-center justify-between mb-4 border-b-4 border-black pb-2">
            <h2 className="text-xl font-black uppercase tracking-tight">📚 Book Categories</h2>
          </div>
          {/* Add new */}
          <form onSubmit={(e) => { e.preventDefault(); handleCreate('book'); }} className="neo-brutalist bg-white p-2 mb-6 flex items-end gap-2">
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-[10px] font-black uppercase tracking-wider ml-1">New Category</label>
              <input type="text" placeholder="Fiction, Romance..." className="neo-brutalist-input py-2 text-sm" value={newBookCategory} onChange={e => setNewBookCategory(e.target.value)} />
            </div>
            <button type="submit" className="neo-brutalist-button p-2 px-6 font-black bg-[var(--color-status-ongoing)] text-white text-xl">+</button>
          </form>
          {/* Grid */}
          <div className="flex flex-wrap gap-3">
            {bookCategories.map(cat => <CategoryCard key={cat.id} cat={cat} />)}
            {bookCategories.length === 0 && (
              <div className="w-full text-center p-8 bg-white neo-brutalist text-gray-400 font-bold font-mono text-sm">
                NO BOOK CATEGORIES YET.
              </div>
            )}
          </div>
        </section>
      </div>

      {itemToDelete !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setItemToDelete(null)} />
          <div className="neo-brutalist bg-white w-full max-w-sm z-10 p-6 flex flex-col gap-4">
            <h2 className="text-xl font-black uppercase font-sans tracking-tight border-b-2 border-black pb-2 text-red-600">CONFIRM DELETION</h2>
            <p className="font-mono text-sm font-bold">Are you sure you want to delete this category? This might affect items linked to it.</p>
            <div className="flex justify-end gap-3 mt-4">
              <button onClick={() => setItemToDelete(null)} className="neo-brutalist-button-secondary font-bold">CANCEL</button>
              <button onClick={handleDelete} className="neo-brutalist-button px-6 font-black bg-red-600 text-white hover:bg-red-700">DELETE</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
