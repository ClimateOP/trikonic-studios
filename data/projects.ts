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
    title: 'College Things Trailer',
    type: 'film',
    description: 'A trailer of our first short film "College Things"',
    source: 'vYVgI16E66g',
  },
  {
    id: 'film-2',
    title: 'College Things Short Film',
    type: 'film',
    description: 'Our first short film College Things',
    source: 'xEJLLNlqJtM',
  },
  {
    id: 'reel-1',
    title: 'College Things Trailer',
    type: 'reel',
    description: 'A trailer of our first short film "College Things"',
    source: 'https://www.instagram.com/p/Dc-d5tRxcsu/',
  },
  {
    id: 'reel-2',
    title: 'College Things Short Film',
    type: 'reel',
    description: 'Our first short film College Things',
    source: 'https://www.instagram.com/p/DdLjYBtKBb7/',
  },
];

export const filters = [
  { label: 'All', value: 'all' },
  { label: 'Reels', value: 'reel' },
  { label: 'Short Films', value: 'film' },
] as const;
