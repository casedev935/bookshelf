import { getCategoryColor } from '../lib/colorUtils';

export default function MediaCard({ media, onEdit, onDelete, layoutMode = 'grid', isReadOnly = false }: any) {
  const isRow = layoutMode === 'row';
  const imageUrl = media.poster_url || media.cover_url;

  const statusBadge = (
    <span className={`text-[10px] font-mono font-black px-2 py-1 border-2 border-black tracking-widest whitespace-nowrap ${
      media.status === 'assistido' || media.status === 'lido' || media.status === 'finalizada' ? 'bg-[var(--color-status-success)] text-black' :
      media.status === 'na_fila' ? 'bg-[var(--color-status-queue)] text-black' :
      media.status === 'proximo' ? 'bg-[var(--color-status-next)] text-black' :
      'bg-[var(--color-status-ongoing)] text-white'
    }`}>
      {media.status?.replace('_', ' ').toUpperCase() || 'UNKNOWN'}
    </span>
  );

  const categoryBadge = media.category?.name ? (
    <span 
      className="text-[10px] font-mono font-black px-2 py-1 border-2 border-black tracking-widest whitespace-nowrap uppercase"
      style={{ backgroundColor: getCategoryColor(media.category.name) }}
    >
      {media.category.name}
    </span>
  ) : null;

  const actionButtons = isReadOnly ? null : (
    <div className={`flex gap-2 transition-opacity ${isRow ? 'opacity-100 flex-row justify-end' : 'mt-auto pt-2 border-t-2 border-black md:opacity-0 group-hover:opacity-100'}`}>
      <button
        onClick={() => onEdit(media)}
        className="neo-brutalist-button-secondary p-2 flex items-center justify-center hover:bg-blue-50 hover:border-blue-600 transition-colors flex-1 md:flex-none"
        title="Edit"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9"/>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
        </svg>
      </button>
      <button
        onClick={() => onDelete(media.id)}
        className="neo-brutalist-button p-2 flex items-center justify-center bg-red-500 text-white border-2 border-black hover:bg-red-700 transition-colors flex-1 md:flex-none"
        title="Delete"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="3 6 5 6 21 6"/>
          <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
          <path d="M10 11v6"/>
          <path d="M14 11v6"/>
          <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
        </svg>
      </button>
    </div>
  );

  /* ─── ROW MODE ─── */
  if (isRow) {
    return (
      <div className="neo-brutalist flex flex-col md:flex-row items-start md:items-center bg-white p-3 gap-3 group w-full">
        {/* Poster Thumbnail */}
        {imageUrl ? (
          <img src={imageUrl} alt={media.title} className="w-[72px] h-24 object-cover border-2 border-black shrink-0" />
        ) : (
          <div className="w-[72px] h-24 bg-gray-200 border-2 border-black flex items-center justify-center text-gray-400 text-[10px] font-mono shrink-0">N/A</div>
        )}

        {/* Title */}
        <h3 className="font-black uppercase truncate font-sans text-base md:w-56 lg:w-72 shrink-0" title={media.title}>
          {media.title}
        </h3>

        {/* Meta */}
        <div className="flex flex-row items-center gap-4 md:gap-8 flex-1 text-sm font-sans">
          <p className="w-12 truncate" title={`Release Year: ${media.release_year || '-'}`}>{media.release_year || '-'}</p>
          <p className="w-28 lg:w-40 truncate" title={`${media.mediaType === 'book' ? 'Author' : 'Director'}: ${media.director || media.author || '-'}`}>{media.director || media.author || '-'}</p>
          {categoryBadge}
          {media.watched_at && (
            <p className="text-xs text-gray-500 font-mono hidden lg:block">📅 {new Date(media.watched_at).toLocaleDateString('pt-BR')}</p>
          )}
          {media.started_reading_at && (
            <p className="text-xs text-gray-500 font-mono hidden lg:block">
              📖 {new Date(media.started_reading_at).toLocaleDateString('pt-BR')} 
              {media.finished_reading_at ? ` → ${new Date(media.finished_reading_at).toLocaleDateString('pt-BR')}` : ' (LENDO)'}
            </p>
          )}
        </div>

        {statusBadge}

        <div className="w-24 flex justify-end">{actionButtons}</div>
      </div>
    );
  }

  /* ─── GRID MODE ─── */
  return (
    <div className="neo-brutalist flex flex-col bg-white relative group w-full overflow-hidden">
      {/* Poster Image */}
      {imageUrl ? (
        <div className="w-full h-52 overflow-hidden border-b-2 border-black">
          <img src={imageUrl} alt={media.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        </div>
      ) : (
        <div className="w-full h-32 bg-gray-100 border-b-2 border-black flex items-center justify-center text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
        </div>
      )}

      <div className="p-4 flex flex-col gap-2 flex-1">
        {/* Title Only */}
        <div className="border-b-2 border-black pb-2">
          <h3 className="font-black text-base leading-tight uppercase truncate font-sans" title={media.title}>
            {media.title}
          </h3>
        </div>

        {/* Details */}
        <div className="text-sm font-sans flex-1">
          <p><strong>YEAR:</strong> {media.release_year || 'N/A'}</p>
          <p className="truncate" title={`${media.mediaType === 'book' ? 'Author' : 'Director'}: ${media.director || media.author || '-'}`}><strong>{media.mediaType === 'book' ? 'AUTHOR' : 'DIRECTOR'}:</strong> {media.director || media.author || 'N/A'}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {categoryBadge}
            {statusBadge}
          </div>
          {media.watched_at && (
            <p className="mt-1 text-xs text-gray-500 font-mono">📅 {new Date(media.watched_at).toLocaleDateString('pt-BR')}</p>
          )}
          {media.started_reading_at && (
            <p className="mt-1 text-xs text-gray-500 font-mono">
              📖 {new Date(media.started_reading_at).toLocaleDateString('pt-BR')} 
              {media.finished_reading_at ? ` → ${new Date(media.finished_reading_at).toLocaleDateString('pt-BR')}` : ' (LENDO)'}
            </p>
          )}
        </div>

        {actionButtons}
      </div>
    </div>
  );
}
