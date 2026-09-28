import { site } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-(--glass-border) py-10 text-center text-sm text-faint">
      © {new Date().getFullYear()}{' '}
      <span className="text-accent">▲ {site.name} ▲</span> All rights reserved.
    </footer>
  );
}
