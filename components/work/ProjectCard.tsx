/* eslint-disable @next/next/no-img-element */
import type { Project } from '@/data/projects';
import { TiltCard } from '@/components/ui/TiltCard';

interface ProjectCardProps {
  project: Project;
  onPlay: (project: Project) => void;
}

export function ProjectCard({ project, onPlay }: ProjectCardProps) {
  const isFilm = project.type === 'film';
  const inner = (
    <>
      <div
        className={`relative w-full overflow-hidden bg-bg-1 ${
          isFilm ? 'aspect-video' : 'aspect-9/16'
        }`}
      >
        {isFilm ? (
          <img
            src={`https://img.youtube.com/vi/${project.source}/hqdefault.jpg`}
            alt={project.title}
            className="size-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="size-full bg-linear-to-br from-accent/20 via-bg-1 to-accent-2/20" />
        )}
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="triangle size-14 rotate-90 bg-accent/90 shadow-[0_0_30px_var(--accent-glow)] transition group-hover:scale-110" />
        </span>
        <span className="glass absolute left-3 top-3 rounded-full px-3 py-1 text-xs text-accent">
          {isFilm ? 'Short Film' : 'Reel'}
        </span>
      </div>
      <div className="relative p-5">
        <h3 className="mb-1 font-display text-lg font-semibold">
          {project.title}
        </h3>
        <p className="text-sm text-dim">{project.description}</p>
      </div>
    </>
  );

  return (
    <div className="mb-6 break-inside-avoid">
      <TiltCard>
        {isFilm ? (
          <button
            onClick={() => onPlay(project)}
            className="block w-full text-left"
          >
            {inner}
          </button>
        ) : (
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            {inner}
          </a>
        )}
      </TiltCard>
    </div>
  );
}
