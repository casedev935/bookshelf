'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../../components/Sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async (token: string) => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/profile`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (res.ok) {
          const userData = await res.json();
          setUser(userData);
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem('token');
          router.push('/login');
        }
      } catch (err) {
        console.error('Failed to fetch profile:', err);
        router.push('/login');
      }
    };

    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    } else {
      fetchProfile(token);
    }
  }, [router]);

  if (!isAuthenticated) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-[var(--color-background-primary)]">
        <div className="font-mono font-black text-xl animate-pulse">VERIFYING_ACCESS...</div>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full p-2 md:p-6 gap-2 md:gap-6 overflow-hidden bg-[var(--color-background-primary)]">
      <Sidebar user={user} />
      <main className="flex-1 overflow-y-auto flex flex-col">
        {children}
      </main>
    </div>
  );
}
