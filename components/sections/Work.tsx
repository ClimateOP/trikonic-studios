'use client';

import { useState } from 'react';
import { filters, projects, type Project } from '@/data/projects';
import { SectionHead } from '@/components/ui/SectionHead';
import { Reveal } from '@/components/ui/Reveal';
import { ProjectCard } from '@/components/work/ProjectCard';
import { VideoModal } from '@/components/work/VideoModal';

export function Work() {
  const [filter, setFilter] = useState<string>('all');
  const [active, setActive] = useState<Project | null>(null);

  const visible = projects.filter((p) => filter === 'all' || p.type === filter);

  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionHead
          label="01 — Work"
          title="Stories we've brought to life."
          sub="Reels from Instagram and short films from YouTube. Tap any film to watch."
        />
        <Reveal className="mb-10 flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
                filter === f.value
                  ? 'border-accent bg-accent text-[#1a1305]'
                  : 'glass text-dim hover:text-text'
              }`}
            >
              {f.label}
            </button>
          ))}
        </Reveal>
        <div key={filter} className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {visible.map((p) => (
            <ProjectCard key={p.id} project={p} onPlay={setActive} />
          ))}
        </div>
      </div>
      <VideoModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
