'use client';

import { useEffect, useState } from 'react';
import { navLinks } from '@/data/site';
import { Logo } from '@/components/ui/Logo';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-[1000] flex justify-center px-4">
      <nav
        className={`glass relative flex w-full max-w-4xl items-center justify-between rounded-full px-6 transition-all duration-300 ${
          scrolled ? 'bg-bg-0/70 py-2.5 shadow-2xl' : 'py-3.5'
        }`}
      >
        <Logo />
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-sm font-medium text-dim transition-colors hover:text-text"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <button
          className="text-xl md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'}`} />
        </button>
        {open && (
          <ul className="glass-strong absolute left-0 right-0 top-full mt-2 flex flex-col gap-4 rounded-3xl p-6 md:hidden">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-dim hover:text-text"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
