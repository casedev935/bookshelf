'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function HamburgerIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export default function Sidebar({ user }: { user?: any }) {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  const togglePublic = async () => {
    try {
      const newStatus = !user?.is_public;
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/profile`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ is_public: newStatus })
      });
      if (res.ok) {
        window.location.reload(); // Quick refresh to update state
      }
    } catch (err) {
      console.error('Failed to toggle public status:', err);
    }
  };

  const userInitial = user?.name ? user.name.charAt(0).toUpperCase() : '?';

  return (
    <div className={`neo-brutalist flex flex-col h-full bg-white transition-all duration-200 shrink-0 ${isOpen ? 'w-56' : 'w-14'}`}>
      {/* Header with hamburger toggle */}
      <div className={`p-3 border-b-2 border-black flex items-center ${isOpen ? 'justify-between' : 'justify-center'}`}>
        {isOpen && <h2 className="font-mono font-black text-lg">MEDIA_MGR</h2>}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="neo-brutalist-button p-2 leading-none hover:bg-black hover:text-white transition-colors"
          title="Toggle Sidebar"
        >
          <HamburgerIcon />
        </button>
      </div>

      {/* User Profile Info */}
      <div className={`p-3 border-b-2 border-black flex items-center gap-3 bg-[var(--color-background-secondary)] ${!isOpen ? 'justify-center' : ''}`}>
        <div className="w-8 h-8 rounded-full border-2 border-black bg-[var(--color-accent)] flex items-center justify-center font-black text-white overflow-hidden shrink-0">
          {user?.profile_picture_url ? (
            <img src={user.profile_picture_url} alt={user.name} className="w-full h-full object-cover" />
          ) : (
            <span>{userInitial}</span>
          )}
        </div>
        {isOpen && (
          <div className="flex flex-col overflow-hidden flex-1">
            <span className="font-black text-xs truncate uppercase tracking-tighter">{user?.name || 'GUEST_USER'}</span>
            <div className="flex items-center gap-1">
              <span className={`w-2 h-2 rounded-full ${user?.is_public ? 'bg-green-500' : 'bg-gray-400'}`}></span>
              <span className="text-[10px] font-bold text-gray-500 truncate lowercase">
                {user?.is_public ? 'PUBLIC' : 'PRIVATE'}
              </span>
            </div>
          </div>
        )}
        {isOpen && (
          <button 
            onClick={togglePublic}
            className={`p-1 rounded border-2 border-black hover:bg-black hover:text-white transition-colors text-[10px] font-black`}
            title={user?.is_public ? "Disable Public Profile" : "Enable Public Profile"}
          >
            {user?.is_public ? 'OFF' : 'ON'}
          </button>
        )}
      </div>

      {/* Public Link (if enabled) */}
      {isOpen && user?.is_public && (
        <div className="px-3 py-1 border-b-2 border-black bg-yellow-50 flex flex-col gap-1 max-w-full overflow-hidden">
          <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">
            {user?.username ? 'Share Link:' : 'Set your username:'}
          </span>
          
          {user?.username ? (
            <div className="flex items-center gap-1">
              <input 
                readOnly 
                value={`/u/${user.username}`} 
                className="bg-white border border-black text-[10px] font-mono px-1 flex-1 py-0.5"
              />
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(`${window.location.origin}/u/${user.username}`);
                  alert('Link copied!');
                }}
                className="p-0.5 border border-black hover:bg-black hover:text-white"
              >
                📋
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <input 
                id="username-input"
                placeholder="ex: george"
                className="bg-white border border-black text-[10px] font-mono px-1 flex-1 py-0.5"
                onKeyDown={async (e) => {
                  if (e.key === 'Enter') {
                    const val = (e.target as HTMLInputElement).value;
                    if (!val) return;
                    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/profile`, {
                        method: 'PATCH',
                        headers: {
                          'Content-Type': 'application/json',
                          'Authorization': `Bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify({ username: val })
                      });
                      if (res.ok) window.location.reload();
                      else alert('Username already taken or invalid');
                  }
                }}
              />
              <button 
                className="p-0.5 border border-black hover:bg-black hover:text-white text-[10px] font-black"
                onClick={async () => {
                    const val = (document.getElementById('username-input') as HTMLInputElement).value;
                    if (!val) return;
                    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/profile`, {
                        method: 'PATCH',
                        headers: {
                          'Content-Type': 'application/json',
                          'Authorization': `Bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify({ username: val })
                      });
                      if (res.ok) window.location.reload();
                      else alert('Username already taken or invalid');
                }}
              >
                SET
              </button>
            </div>
          )}
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-3 flex flex-col gap-3 font-sans overflow-hidden">
        <a href="/dashboard" className={`font-black hover:underline hover:text-[var(--color-accent)] flex items-center gap-3 ${!isOpen ? 'justify-center' : ''}`}>
          <span className="text-lg">📊</span>
          {isOpen && <span className="text-sm tracking-wide">DASHBOARD</span>}
        </a>
        <a href="/dashboard/movies" className={`font-black hover:underline hover:text-[var(--color-accent)] flex items-center gap-3 ${!isOpen ? 'justify-center' : ''}`}>
          <span className="text-lg">🎬</span>
          {isOpen && <span className="text-sm tracking-wide">MOVIES</span>}
        </a>
        <a href="/dashboard/books" className={`font-black hover:underline hover:text-[var(--color-accent)] flex items-center gap-3 ${!isOpen ? 'justify-center' : ''}`}>
          <span className="text-lg">📚</span>
          {isOpen && <span className="text-sm tracking-wide">BOOKS</span>}
        </a>
        <a href="/dashboard/series" className={`font-black hover:underline hover:text-[var(--color-accent)] flex items-center gap-3 ${!isOpen ? 'justify-center' : ''}`}>
          <span className="text-lg">📺</span>
          {isOpen && <span className="text-sm tracking-wide">SERIES</span>}
        </a>
        <a href="/dashboard/categories" className={`font-black hover:underline hover:text-[var(--color-accent)] flex items-center gap-3 ${!isOpen ? 'justify-center' : ''}`}>
          <span className="text-lg">🏷️</span>
          {isOpen && <span className="text-sm tracking-wide">CATEGORIES</span>}
        </a>
      </nav>

      {/* Logout */}
      <div className="p-3 border-t-2 border-black flex justify-center">
        <button
          onClick={handleLogout}
          className={`neo-brutalist-button-secondary font-bold py-2 text-sm hover:bg-red-50 hover:text-red-700 hover:border-red-700 transition-colors ${isOpen ? 'w-full' : 'px-2'}`}
          title="Logout"
        >
          {isOpen ? 'LOGOUT' : '⏏'}
        </button>
      </div>
    </div>
  );
}
