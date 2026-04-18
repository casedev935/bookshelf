'use client';

import { getCategoryColor } from '../lib/colorUtils';

export default function MediaPreviewModal({ isOpen, onClose, onEdit, media, isReadOnly = false }: any) {
  if (!isOpen || !media) return null;

  const imageUrl = media.poster_url || media.cover_url;
  const isBook = media.mediaType === 'book';
  const isSeries = media.mediaType === 'series';

  const categoryBadge = media.category?.name ? (
    <span 
      className="text-xs font-mono font-black px-3 py-1.5 border-2 border-black tracking-widest uppercase text-black"
      style={{ backgroundColor: getCategoryColor(media.category.name) }}
    >
      {media.category.name}
    </span>
  ) : null;

  const statusBadge = (
    <span className={`text-xs font-mono font-black px-3 py-1.5 border-2 border-black tracking-widest uppercase ${
      media.status === 'assistido' || media.status === 'lido' || media.status === 'finalizada' ? 'bg-[var(--color-status-success)] text-black' :
      media.status === 'na_fila' ? 'bg-[var(--color-status-queue)] text-black' :
      media.status === 'proximo' ? 'bg-[var(--color-status-next)] text-white' :
      'bg-[var(--color-status-ongoing)] text-white'
    }`}>
      {media.status?.replace('_', ' ').toUpperCase() || 'UNKNOWN'}
    </span>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="neo-brutalist bg-white w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row z-10 animate-in slide-in-from-bottom-8 duration-300">
        
        {/* Left Side: Image (Large) */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-gray-100 border-b-2 md:border-b-0 md:border-r-2 border-black overflow-hidden group">
            {imageUrl ? (
                <img 
                    src={imageUrl} 
                    alt={media.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
            ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 font-mono gap-4 uppercase font-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-20"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                    <span>No Image Available</span>
                </div>
            )}
            
            {/* Close button for mobile inside image block */}
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 md:hidden bg-white border-2 border-black p-2 neo-brutalist shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none translate-x-0 active:translate-x-[2px] active:translate-y-[2px]"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
        </div>

        {/* Right Side: Details */}
        <div className="w-full md:w-1/2 flex flex-col p-6 sm:p-8 overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 mb-1">
                        {categoryBadge}
                        {statusBadge}
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-none break-words">
                        {media.title}
                    </h2>
                </div>
                {/* Desktop Close Button */}
                <button 
                    onClick={onClose}
                    className="hidden md:flex neo-brutalist-button-secondary p-2 group"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:rotate-90 transition-transform"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8 border-y-2 border-black py-6">
                <div>
                   <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Release Year</p>
                   <p className="font-mono text-xl font-black">{media.release_year || 'N/A'}</p>
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase text-gray-500 mb-1">{isBook ? 'Author' : 'Director'}</p>
                   <p className="font-mono text-lg font-black truncate">{media.director || media.author || 'N/A'}</p>
                </div>
                
                {media.watched_at && (
                    <div className="col-span-2">
                        <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Watched At</p>
                        <p className="font-mono text-lg font-black italic">📅 {new Date(media.watched_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
                    </div>
                )}
                
                {media.started_reading_at && (
                    <div className="col-span-2">
                        <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Reading Timeline</p>
                        <div className="flex flex-col gap-1">
                            <p className="font-mono text-sm font-bold flex items-center gap-2">
                                <span className="bg-green-100 px-1 border border-green-600 text-green-700">STARTED:</span> 
                                {new Date(media.started_reading_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                            </p>
                            {media.finished_reading_at ? (
                                <p className="font-mono text-sm font-bold flex items-center gap-2">
                                    <span className="bg-blue-100 px-1 border border-blue-600 text-blue-700">FINISHED:</span> 
                                    {new Date(media.finished_reading_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                                </p>
                            ) : (
                                <p className="font-mono text-[10px] font-black text-amber-600 animate-pulse mt-1 italic uppercase tracking-widest underline decoration-wavy underline-offset-4 decoration-amber-600/30">CURRENTLY_READING...</p>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-auto flex gap-4 pt-4">
                {!isReadOnly && (
                    <button 
                        onClick={() => { onEdit(media); onClose(); }}
                        className="neo-brutalist-button flex-1 py-4 font-black uppercase tracking-widest bg-[var(--color-accent)] text-black flex items-center justify-center gap-2 group"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                        <span>Edit Info</span>
                    </button>
                )}
                <button 
                    onClick={onClose}
                    className="neo-brutalist-button-secondary flex-1 py-4 font-black uppercase tracking-widest text-center"
                >
                    Back
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}
