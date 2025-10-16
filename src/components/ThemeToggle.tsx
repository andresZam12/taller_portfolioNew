'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';
  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="rounded-xl border px-3 py-2 text-sm
                 bg-white/10 dark:bg-black/20 backdrop-blur
                 hover:bg-white/20 dark:hover:bg-black/30 transition
                 focus:outline-none focus:ring-2 focus:ring-offset-2"
      aria-label="Cambiar tema"
      title={`Cambiar a ${isDark ? 'light' : 'dark'}`}
    >
      {isDark ? ' Dark' : ' Light'}
    </button>
  );
}
