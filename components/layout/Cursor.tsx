'use client';

import { useEffect, useRef } from 'react';

const HOVERABLES = 'a, button, [data-hover]';

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current)
        dot.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
    };
    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ring.current)
        ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    };
    const over = (e: MouseEvent) => {
      if ((e.target as Element).closest?.(HOVERABLES))
        ring.current?.classList.add('hovering');
    };
    const out = (e: MouseEvent) => {
      if ((e.target as Element).closest?.(HOVERABLES))
        ring.current?.classList.remove('hovering');
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
    };
  }, []);

  return (
    <>
      <div
        ref={ring}
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[99999] size-[38px] rounded-full border-[1.5px] border-accent transition-[width,height,background] duration-200 [&.hovering]:size-[60px] [&.hovering]:bg-accent/10"
      />
      <div
        ref={dot}
        className="cursor-dot pointer-events-none fixed left-0 top-0 z-[99999] size-2 rounded-full bg-accent shadow-[0_0_12px_var(--accent-glow)]"
      />
    </>
  );
}
