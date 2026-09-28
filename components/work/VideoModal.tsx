'use client';

import { useEffect } from 'react';
import type { Project } from '@/data/projects';

interface VideoModalProps {
  project: Project | null;
  onClose: () => void;
}

export function VideoModal({ project, onClose }: VideoModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <div className="aspect-video overflow-hidden rounded-2xl border border-(--glass-border-strong) shadow-2xl">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${project.source}?autoplay=1&rel=0`}
            title={project.title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="size-full"
          />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <a
            href={`https://www.youtube.com/watch?v=${project.source}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent hover:underline"
          >
            <i className="fa-brands fa-youtube" /> Watch on YouTube
          </a>
          <button
            onClick={onClose}
            className="glass rounded-full px-4 py-1.5 text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
