import { site } from '@/data/site';
import { Reveal } from '@/components/ui/Reveal';

const links = [
  {
    label: 'Instagram',
    icon: 'fa-brands fa-instagram',
    href: site.socials.instagram,
  },
  {
    label: 'Gmail',
    icon: 'fa-solid fa-envelope',
    href: `mailto:${site.socials.email}`,
  },
  {
    label: 'WhatsApp',
    icon: 'fa-brands fa-whatsapp',
    href: `https://wa.me/${site.socials.whatsapp}`,
  },
];

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="glass-strong rounded-3xl px-8 py-14 text-center">
          <span className="mb-2 block font-display text-sm font-semibold uppercase tracking-[0.15em] text-accent">
            ▲ 03 — Contact
          </span>
          <h2 className="mb-3 font-display text-[clamp(1.8rem,4vw,2.6rem)] font-bold">
            Let&apos;s make something worth watching.
          </h2>
          <p className="mb-8 text-dim">
            Have a reel, a film or a wild idea? Reach us on any of these.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex items-center gap-2.5 rounded-2xl px-6 py-3.5 text-sm font-medium transition hover:-translate-y-1 hover:border-accent hover:shadow-[0_10px_30px_var(--accent-glow)]"
              >
                <i className={`${l.icon} text-lg text-accent`} />
                {l.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
