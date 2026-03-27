'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
    
    try {
      const res = await fetch(`${apiUrl}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      
      if (!res.ok) {
        throw new Error('Invalid credentials');
      }
      
      const data = await res.json();
      localStorage.setItem('token', data.access_token);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="neo-brutalist w-full max-w-md p-8 bg-white flex flex-col gap-6">
        <h1 className="text-3xl font-black mb-2 font-mono uppercase tracking-tighter">LOGIN_SYSTEM</h1>
        
        {error && (
          <div className="neo-brutalist bg-red-100 p-3 text-red-800 font-bold border-red-800">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-bold text-sm">E-MAIL</label>
            <input 
              type="email" 
              className="neo-brutalist-input w-full"
              placeholder="user@media-mgr.tech"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="flex flex-col gap-1">
            <label className="font-bold text-sm">PASSWORD</label>
            <input 
              type="password" 
              className="neo-brutalist-input w-full"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="neo-brutalist-button mt-4 py-3 text-lg">
            ENTER SYSTEM
          </button>
        </form>
        
        <div className="mt-4 text-center text-sm font-bold border-t-2 border-black pt-4">
          NO ACCOUNT? <Link href="/register" className="text-[var(--color-accent)] hover:underline">REGISTER NOW</Link>
        </div>
      </div>
    </div>
  );
}
