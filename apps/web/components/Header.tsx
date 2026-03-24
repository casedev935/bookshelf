'use client';

export default function Header({ title }: { title: string }) {
  return (
    <header className="neo-brutalist bg-white w-full p-4 md:p-6 mb-6 flex justify-between items-center z-10 relative">
      <h1 className="text-xl font-black font-sans uppercase">{title}</h1>
      <div className="flex gap-4">
        {/* Aditional controls like Grid/Row toggle goes here */}
      </div>
    </header>
  );
}
