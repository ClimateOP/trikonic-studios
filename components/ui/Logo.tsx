import Image from 'next/image';
import { site } from '@/data/site';

export function Logo() {
  return (
    <a
      href="#hero"
      className="flex items-center gap-1 font-display text-lg font-bold tracking-tight"
    >
      {site.name}
      <span className="text-accent">.</span>
    </a>
  );
}
