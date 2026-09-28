import { Reveal } from './Reveal';

interface SectionHeadProps {
  label: string;
  title: string;
  sub?: string;
}

export function SectionHead({ label, title, sub }: SectionHeadProps) {
  return (
    <Reveal className="mb-12">
      <span className="mb-2 block font-display text-sm font-semibold uppercase tracking-[0.15em] text-accent">
        ▲ {label}
      </span>
      <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.1] tracking-tight">
        {title}
      </h2>
      {sub && <p className="mt-3 max-w-xl text-dim">{sub}</p>}
    </Reveal>
  );
}
