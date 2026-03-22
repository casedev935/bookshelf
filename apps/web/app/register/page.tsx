'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function CheckItem({ label, checked }: { label: string; checked: boolean }) {
  return (
    <div className={`text-xs font-mono font-black flex items-center gap-2 transition-colors duration-200 ${checked ? 'text-green-600' : 'text-gray-400'}`}>
      <div
        className={`w-4 h-4 border-2 border-black flex items-center justify-center text-[10px] transition-colors duration-200 ${checked ? 'bg-green-600 text-white' : 'bg-white text-transparent'}`}
        suppressHydrationWarning
      >
        V
      </div>
      {label}
    </div>
  );
}

function EyeIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const hasLength = password.length >= 8;
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[^A-Za-z0-9]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasMatch = password.length > 0 && password === confirmPassword;

  const isFormValid = hasLength && hasNumber && hasSymbol && hasUpper && hasLower && hasMatch && name.length > 0 && email.length > 0;

  const handleRegister = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    setError('');

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Registration failed');
      }

      router.push('/login');
    } catch (err: any) {
      setError(err.message);
    }
  }, [isFormValid, name, email, password, router]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="neo-brutalist w-full max-w-md p-8 bg-white flex flex-col gap-6">
        <h1 className="text-3xl font-black mb-2 font-mono uppercase tracking-tighter">
          REGISTER_USER
        </h1>

        {error && (
          <div className="neo-brutalist bg-red-100 p-3 text-red-800 font-bold border-red-800">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-bold text-sm uppercase">Full Name</label>
            <input
              type="text"
              className="neo-brutalist-input w-full"
              placeholder="JOHN DOE"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold text-sm uppercase">E-Mail Address</label>
            <input
              type="email"
              className="neo-brutalist-input w-full"
              placeholder="user@media-mgr.tech"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold text-sm uppercase">Security Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="neo-brutalist-input w-full pr-10"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black"
              >
                <EyeIcon open={showPassword} />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold text-sm uppercase">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirm ? 'text' : 'password'}
                className="neo-brutalist-input w-full pr-10"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black"
              >
                <EyeIcon open={showConfirm} />
              </button>
            </div>
          </div>

          {/* Real-time checklist */}
          <div className="mt-1 space-y-2 bg-[var(--color-background-primary)] p-3 neo-brutalist" suppressHydrationWarning>
            <CheckItem label="MIN 8 CHARACTERS" checked={hasLength} />
            <CheckItem label="UPPERCASE LETTER (A-Z)" checked={hasUpper} />
            <CheckItem label="LOWERCASE LETTER (a-z)" checked={hasLower} />
            <CheckItem label="NUMBER (0-9)" checked={hasNumber} />
            <CheckItem label="SYMBOL (!@#...)" checked={hasSymbol} />
            <CheckItem label="PASSWORDS MATCH" checked={hasMatch} />
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`neo-brutalist-button mt-4 py-3 text-lg transition-all ${!isFormValid ? 'opacity-30 cursor-not-allowed grayscale' : 'hover:scale-[1.02]'}`}
          >
            REGISTER
          </button>
        </form>

        <div className="mt-4 text-center text-sm font-bold border-t-2 border-black pt-4 uppercase">
          Already in system?{' '}
          <Link href="/login" className="text-[var(--color-accent)] hover:underline">
            Access Login
          </Link>
        </div>
      </div>
    </div>
  );
}
