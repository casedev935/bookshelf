'use client';
import { useState, useEffect, useRef } from 'react';

export default function MediaModal({ isOpen, onClose, onSave, title, initialData, type }: any) {
  const [formData, setFormData] = useState<any>({});
  const [categories, setCategories] = useState<any[]>([]);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchTimeout = useRef<any>(null);

  useEffect(() => {
    if (isOpen) {
      setError(null);
      setSuggestions([]);
      if (initialData) {
        // Prepare initial data (handle dates for inputs)
        const preparedData = { ...initialData };
        if (preparedData.watched_at) {
          preparedData.watched_at = new Date(preparedData.watched_at).toISOString().split('T')[0];
        }
        if (preparedData.started_reading_at) {
          preparedData.started_reading_at = new Date(preparedData.started_reading_at).toISOString().split('T')[0];
        }
        if (preparedData.finished_reading_at) {
          preparedData.finished_reading_at = new Date(preparedData.finished_reading_at).toISOString().split('T')[0];
        }
        setFormData(preparedData);
      } else {
        setFormData({ title: '', status: 'na_fila', release_year: '' });
      }
      fetchCategories();
    }
  }, [initialData, isOpen]);

  const fetchCategories = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories?type=${type}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) setCategories(await res.json());
    } catch (err) { console.error(err); }
  };

  const searchMedia = async (query: string) => {
    if (query.length < 3) { setSuggestions([]); return; }
    setIsSearching(true);
    const token = localStorage.getItem('token');
    const endpoint = type === 'movie' ? 'movies' : type === 'series' ? 'series' : 'books';
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}/search?q=${encodeURIComponent(query)}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) setSuggestions(await res.json());
    } catch (err) { console.error(err); }
    setIsSearching(false);
  };

  const handleTitleChange = (val: string) => {
    setFormData({ ...formData, title: val });
    if (!initialData) {
      if (searchTimeout.current) clearTimeout(searchTimeout.current);
      searchTimeout.current = setTimeout(() => searchMedia(val), 500);
    }
  };

  const selectSuggestion = (s: any) => {
    const updatedData = {
      ...formData,
      title: s.title,
      release_year: s.release_year,
    };

    if (type === 'movie') {
      updatedData.director = s.director;
      updatedData.poster_url = s.poster_url;
    } else if (type === 'series') {
      updatedData.poster_url = s.poster_url;
    } else {
      updatedData.author = s.author;
      updatedData.cover_url = s.cover_url;
    }

    setFormData(updatedData);
    setSuggestions([]);
  };

  if (!isOpen) return null;

  const isMovie = type === 'movie';
  const isSeries = type === 'series';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="neo-brutalist bg-white w-full max-w-lg z-10 p-6 flex flex-col gap-4 max-h-[90vh] overflow-y-auto relative">
        <div className="flex justify-between items-center border-b-2 border-black pb-4 sticky top-0 bg-white z-10 font-sans">
          <h2 className="text-xl font-black uppercase tracking-tight">{title}</h2>
          <button onClick={onClose} className="font-mono text-xl leading-none font-bold bg-[var(--color-accent)] text-white px-3 py-1 border-2 border-black hover:bg-black transition-colors">X</button>
        </div>

        {error && (
          <div className="bg-red-100 border-2 border-red-600 text-red-600 p-2 font-bold font-mono text-xs uppercase animate-in zoom-in-95">
            Error: {error}
          </div>
        )}

        <form className="flex flex-col gap-4 mt-2" onSubmit={async (e) => { 
          e.preventDefault(); 
          setError(null);
          // Ensure category_id is int or null
          const submissionData = { ...formData };
          
          // Remove read-only / relation / frontend-only fields
          delete submissionData.id;
          delete submissionData.user_id;
          delete submissionData.created_at;
          delete submissionData.category;
          delete submissionData.mediaType;
          delete submissionData.user;
          
          // Parse category_id
          if (submissionData.category_id) submissionData.category_id = parseInt(submissionData.category_id);
          else delete submissionData.category_id;

          // Parse release_year
          if (submissionData.release_year) submissionData.release_year = parseInt(submissionData.release_year);
          else delete submissionData.release_year;
          
          // Convert date strings to full ISO-8601 DateTime
          if (submissionData.watched_at) submissionData.watched_at = new Date(submissionData.watched_at).toISOString();
          if (submissionData.started_reading_at) submissionData.started_reading_at = new Date(submissionData.started_reading_at).toISOString();
          if (submissionData.finished_reading_at) submissionData.finished_reading_at = new Date(submissionData.finished_reading_at).toISOString();
          
          try {
            await onSave(submissionData); 
          } catch (err: any) {
            setError(err.message || 'Failed to save media');
          }
        }}>
          {/* TITLE with Suggestions */}
          <div className="flex flex-col gap-1 relative">
            <label className="text-sm font-bold font-mono">TITLE {isSearching && <span className="text-blue-500 animate-pulse">...SEARCHING...</span>}</label>
            <input required type="text" className="neo-brutalist-input" value={formData.title || ''} onChange={e => handleTitleChange(e.target.value)} />
            
            {suggestions.length > 0 && (
              <div className="absolute top-[100%] left-0 right-0 bg-white border-2 border-black z-20 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-1 max-h-60 overflow-y-auto">
                {suggestions.map((s: any, idx: number) => (
                  <div 
                    key={`suggestion-${s.id}-${idx}`} 
                    onClick={() => selectSuggestion(s)}
                    className="p-2 hover:bg-yellow-100 cursor-pointer border-b-2 border-black last:border-0 flex gap-3 items-center group"
                  >
                    {(s.poster_url || s.cover_url) && <img src={s.poster_url || s.cover_url} className="w-8 h-12 object-cover border border-black" />}
                    <div className="flex flex-col overflow-hidden">
                      <span className="font-black text-xs uppercase truncate">{s.title}</span>
                      <span className="text-[10px] font-mono opacity-60">
                        {s.release_year} • {isMovie ? `DIR: ${s.director}` : type === 'series' ? 'TV SERIES' : `AUTH: ${s.author}`}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* YEAR */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold font-mono">YEAR</label>
              <input type="number" className="neo-brutalist-input" value={formData.release_year || ''} onChange={e => setFormData({...formData, release_year: e.target.value})} />
            </div>
            
            {/* CATEGORY DROPDOWN */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold font-mono">CATEGORY</label>
              <select className="neo-brutalist-input bg-white cursor-pointer" value={formData.category_id || ''} onChange={e => setFormData({...formData, category_id: e.target.value})}>
                <option value="">NO CATEGORY</option>
                {categories.map((cat, idx) => (
                  <option key={`cat-${cat.id || idx}`} value={cat.id}>{cat.name.toUpperCase()}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* AUTHOR / DIRECTOR */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold font-mono">{isMovie ? 'DIRECTOR' : 'AUTHOR'}</label>
            <input type="text" className="neo-brutalist-input" value={formData[isMovie ? 'director' : 'author'] || ''} onChange={e => setFormData({...formData, [isMovie ? 'director' : 'author']: e.target.value})} />
          </div>

          {/* POSTER / COVER URL */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold font-mono">{isMovie ? 'POSTER URL' : 'COVER URL'}</label>
            <input type="url" placeholder="https://..." className="neo-brutalist-input" value={formData[isMovie ? 'poster_url' : 'cover_url'] || ''} onChange={e => setFormData({...formData, [isMovie ? 'poster_url' : 'cover_url']: e.target.value})} />
          </div>

          {/* STATUS */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold font-mono">STATUS</label>
            <select className="neo-brutalist-input bg-white cursor-pointer font-sans" value={formData.status || 'na_fila'} onChange={e => setFormData({...formData, status: e.target.value})}>
              <option value="na_fila">NA FILA</option>
              <option value="proximo">PRÓXIMO</option>
              {!isMovie && !isSeries && <option value="lendo">LENDO</option>}
              {isSeries && <option value="assistindo">ASSISTINDO</option>}
              {isMovie ? <option value="assistido">ASSISTIDO</option> : isSeries ? <option value="finalizada">FINALIZADA</option> : <option value="lido">LIDO</option>}
            </select>
          </div>

          {/* CONDITIONAL DATES */}
          {isMovie && formData.status === 'assistido' && (
            <div className="flex flex-col gap-1 animate-in fade-in slide-in-from-top-1 duration-200">
              <label className="text-sm font-bold font-mono">WATCHED AT</label>
              <input type="date" className="neo-brutalist-input" value={formData.watched_at || ''} onChange={e => setFormData({...formData, watched_at: e.target.value})} />
            </div>
          )}

          {!isMovie && (formData.status === 'lendo' || formData.status === 'lido') && (
            <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-top-1 duration-200">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold font-mono">STARTED READING AT</label>
                <input type="date" className="neo-brutalist-input" value={formData.started_reading_at || ''} onChange={e => setFormData({...formData, started_reading_at: e.target.value})} />
              </div>
              {formData.status === 'lido' && (
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-bold font-mono">FINISHED READING AT</label>
                  <input type="date" className="neo-brutalist-input" value={formData.finished_reading_at || ''} onChange={e => setFormData({...formData, finished_reading_at: e.target.value})} />
                </div>
              )}
            </div>
          )}

          <div className="flex justify-end gap-3 mt-6 border-t-2 border-black pt-4">
            <button type="button" onClick={onClose} className="neo-brutalist-button-secondary font-bold hover:bg-gray-100">CANCEL</button>
            <button type="submit" className="neo-brutalist-button px-6 font-black bg-black text-white hover:bg-gray-800">SAVE_MEDIA</button>
          </div>
        </form>
      </div>
    </div>
  );
}
