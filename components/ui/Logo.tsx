import { site } from '@/data/site';

export function Logo() {
  return (
    <a
      href="#hero"
      className="flex items-center gap-2 font-display text-lg font-bold tracking-tight"
    >
      <span className="triangle size-4 bg-accent shadow-[0_0_12px_var(--accent-glow)]" />
      {site.name}
      <span className="text-accent">.</span>
    </a>
  );
}
