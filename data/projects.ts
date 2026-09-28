export type ProjectType = 'reel' | 'film';

export interface Project {
  id: string;
  title: string;
  type: ProjectType;
  description: string;
  /** Reel: full Instagram post URL. Film: YouTube video ID. */
  source: string;
}

// TODO: replace placeholders with the client's real reels and films.
export const projects: Project[] = [
  {
    id: 'film-1',
    title: 'Short Film One',
    type: 'film',
    description: 'A quiet story told in one night.',
    source: 'dQw4w9WgXcQ',
  },
  {
    id: 'reel-1',
    title: 'Reel One',
    type: 'reel',
    description: 'Brand reel with fast cuts.',
    source: 'https://www.instagram.com/reel/XXXXXXXX/',
  },
  {
    id: 'reel-2',
    title: 'Reel Two',
    type: 'reel',
    description: 'Behind-the-scenes montage.',
    source: 'https://www.instagram.com/reel/YYYYYYYY/',
  },
  {
    id: 'film-2',
    title: 'Short Film Two',
    type: 'film',
    description: 'A cinematic character study.',
    source: 'dQw4w9WgXcQ',
  },
  {
    id: 'reel-3',
    title: 'Reel Three',
    type: 'reel',
    description: 'Product launch teaser.',
    source: 'https://www.instagram.com/reel/ZZZZZZZZ/',
  },
  {
    id: 'film-3',
    title: 'Short Film Three',
    type: 'film',
    description: 'Comedy in three acts.',
    source: 'dQw4w9WgXcQ',
  },
];

export const filters = [
  { label: 'All', value: 'all' },
  { label: 'Reels', value: 'reel' },
  { label: 'Short Films', value: 'film' },
] as const;
