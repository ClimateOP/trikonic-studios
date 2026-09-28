'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const MAX_TILT = 12; // degrees, lower = subtler

export function HeroLogo() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { transformPerspective: 900 });
    const rotX = gsap.quickTo(el, 'rotationX', {
      duration: 0.6,
      ease: 'power3.out',
    });
    const rotY = gsap.quickTo(el, 'rotationY', {
      duration: 0.6,
      ease: 'power3.out',
    });
    const clamp = (v: number) => Math.max(-1, Math.min(1, v));

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const dx = clamp(
        (e.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2),
      );
      const dy = clamp(
        (e.clientY - (r.top + r.height / 2)) / (window.innerHeight / 2),
      );
      rotY(dx * MAX_TILT);
      rotX(-dy * MAX_TILT);
    };
    const onLeave = () => {
      rotX(0);
      rotY(0);
    };

    window.addEventListener('mousemove', onMove);
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div ref={ref} className="will-change-transform">
      <Image
        src="/trikonic-logo-transparent.png"
        alt="Trikonic Studios logo"
        width={460}
        height={413}
        priority
        className="w-64 drop-shadow-[0_0_60px_var(--accent-glow)] md:w-[420px]"
      />
    </div>
  );
}
