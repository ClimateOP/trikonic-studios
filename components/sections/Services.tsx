import { services } from '@/data/site';
import { SectionHead } from '@/components/ui/SectionHead';
import { Reveal } from '@/components/ui/Reveal';
import { TiltCard } from '@/components/ui/TiltCard';

export function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionHead
          label="02 — Services"
          title="Three points. Everything you need."
          sub="From first idea to final export, we handle the whole frame."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <TiltCard className="h-full p-8">
                <div className="relative">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-(--glass-border) bg-accent/10 text-xl text-accent">
                    <i className={s.icon} />
                  </div>
                  <h3 className="mb-2 font-display text-xl font-semibold">
                    {s.title}
                  </h3>
                  <p className="text-sm text-dim">{s.text}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
