'use client';

import { useRef } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export function TiltCard({ children, className = '' }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rx = ((y - r.height / 2) / (r.height / 2)) * -7;
    const ry = ((x - r.width / 2) / (r.width / 2)) * 7;
    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    el.style.setProperty('--mx', `${(x / r.width) * 100}%`);
    el.style.setProperty('--my', `${(y / r.height) * 100}%`);
  };

  const onLeave = () => {
    if (ref.current)
      ref.current.style.transform = 'perspective(800px) rotateX(0) rotateY(0)';
  };

  return (
    <div
      ref={ref}
      data-hover
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`group glass relative overflow-hidden rounded-[20px] transition-[box-shadow,border-color] duration-300 will-change-transform hover:border-(--glass-border-strong) hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 [background:radial-gradient(circle_at_var(--mx,50%)_var(--my,50%),rgba(242,193,78,0.14),transparent_60%)] group-hover:opacity-100" />
      {children}
    </div>
  );
}
