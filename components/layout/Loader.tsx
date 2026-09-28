'use client';

import { useEffect, useState } from 'react';

export function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[99998] flex flex-col items-center justify-center gap-5 bg-bg-0 transition-all duration-700 ${
        hidden ? 'invisible opacity-0' : 'opacity-100'
      }`}
    >
      <div
        className="triangle size-14 bg-accent"
        style={{ animation: 'spin 1.2s linear infinite' }}
      />
      <p className="font-display text-sm uppercase tracking-[0.2em] text-faint">
        Rolling camera…
      </p>
    </div>
  );
}
