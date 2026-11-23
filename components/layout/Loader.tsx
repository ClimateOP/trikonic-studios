'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-99998 flex flex-col items-center justify-center gap-5 bg-bg-0 transition-all duration-700 ${
        hidden ? 'invisible opacity-0' : 'opacity-100'
      }`}
    >
      <Image
        src="/trikonic-logo-transparent.png"
        alt="Trikonic Studios"
        width={300}
        height={300}
        priority
        className="h-auto w-30 animate-pulse"
      />
      <p className="font-display text-sm uppercase tracking-[0.2em] text-faint">
        Rolling camera…
      </p>
    </div>
  );
}
