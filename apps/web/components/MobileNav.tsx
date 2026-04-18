'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function HamburgerIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function MobileNav({ user }: { user?: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  const userInitial = user?.name ? user.name.charAt(0).toUpperCase() : '?';

  return (
    <div className="md:hidden flex flex-col w-full mb-2 z-40 relative">
      {/* Top Bar */}
      <div className="neo-brutalist flex items-center justify-between p-3 bg-white">
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-black bg-[var(--color-accent)] flex items-center justify-center font-black text-white shrink-0">
                {user?.profile_picture_url ? (
                    <img src={user.profile_picture_url} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                    <span>{userInitial}</span>
                )}
            </div>
            <h2 className="font-mono font-black text-lg tracking-tighter">MEDIA_MGR</h2>
        </div>
        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="neo-brutalist-button p-2 leading-none hover:bg-black hover:text-white transition-colors"
          title="Toggle Menu"
        >
          {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="neo-brutalist absolute top-full left-0 right-0 bg-white z-50 mt-1 flex flex-col animate-in fade-in slide-in-from-top-2 duration-200">
             <nav className="flex flex-col p-4 gap-4 font-sans">
                <a 
                    href="/dashboard" 
                    className="font-black text-lg hover:text-[var(--color-accent)] flex items-center gap-3 border-b-2 border-black pb-2"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <span>📊</span> DASHBOARD
                </a>
                <a 
                    href="/dashboard/movies" 
                    className="font-black text-lg hover:text-[var(--color-accent)] flex items-center gap-3 border-b-2 border-black pb-2"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <span>🎬</span> MOVIES
                </a>
                <a 
                    href="/dashboard/books" 
                    className="font-black text-lg hover:text-[var(--color-accent)] flex items-center gap-3 border-b-2 border-black pb-2"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <span>📚</span> BOOKS
                </a>
                <a 
                    href="/dashboard/series" 
                    className="font-black text-lg hover:text-[var(--color-accent)] flex items-center gap-3 border-b-2 border-black pb-2"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <span>📺</span> SERIES
                </a>
                <a 
                    href="/dashboard/categories" 
                    className="font-black text-lg hover:text-[var(--color-accent)] flex items-center gap-3 border-b-2 border-black pb-2"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <span>🏷️</span> CATEGORIES
                </a>
            </nav>

            <div className="p-4 bg-gray-50 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <span className="font-black text-xs uppercase text-gray-500">User Profile</span>
                    <span className="text-[10px] font-bold text-gray-500">{user?.is_public ? 'PUBLIC MODE' : 'PRIVATE MODE'}</span>
                </div>
                <button
                    onClick={handleLogout}
                    className="neo-brutalist-button-secondary font-bold py-2 text-sm hover:bg-red-50 hover:text-red-700 hover:border-red-700 transition-colors w-full"
                >
                    LOGOUT [⏏]
                </button>
            </div>
        </div>
      )}
    </div>
  );
}
