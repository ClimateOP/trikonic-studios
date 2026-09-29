'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { site } from '@/data/site';
import { HeroLogo } from '@/components/ui/HeroLogo';

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-hero]',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          delay: 1,
          ease: 'power3.out',
        },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={root}
      className="relative flex min-h-screen items-center px-6 pb-20 pt-32"
    >
      <div className="mx-auto grid w-full max-w-300 items-center gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <span
            data-hero
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-accent opacity-0"
          >
            <span
              className="size-2 rounded-full bg-accent"
              style={{ animation: 'pulse-ring 2s infinite' }}
            />
            Now booking projects
          </span>
          <h1
            data-hero
            className="mb-4 bg-linear-to-br from-white via-[#fde68a] to-accent bg-clip-text font-display text-[clamp(2.8rem,7vw,5.2rem)] font-bold leading-[1.02] tracking-tighter text-transparent opacity-0"
          >
            Trikonic
            <br />
            Studios
          </h1>
          <p
            data-hero
            className="mb-5 font-display text-[clamp(1.2rem,2.5vw,1.6rem)] font-medium opacity-0"
          >
            Reels · Short Films ·{' '}
            <span className="text-accent">{site.tagline}</span>
          </p>
          <p data-hero className="mb-8 max-w-135 text-dim opacity-0">
            We turn ideas into visual stories, from scroll-stopping reels to
            cinematic short films, shaped by concept, camera and cut.
          </p>
          <div data-hero className="flex flex-wrap gap-4 opacity-0">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-[#1a1305] shadow-[0_8px_30px_var(--accent-glow)] transition hover:-translate-y-0.5"
            >
              <i className="fa-solid fa-play" /> Watch Our Work
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-(--glass-border-strong)"
            >
              <i className="fa-solid fa-paper-plane" /> Get in Touch
            </a>
          </div>
        </div>

        {/* Triangle play mark — swap for a showreel video later */}
        <div data-hero className="mx-auto opacity-0">
          <div data-hero className="mx-auto opacity-0">
            <HeroLogo />
          </div>
        </div>
      </div>
    </section>
  );
}
