'use client';

import { motion } from 'framer-motion';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Grid } from '@/components/ui/Grid';

const stats = [
  { value: '15+', label: 'Years of craft' },
  { value: '120+', label: 'Spaces delivered' },
  { value: '04', label: 'Design disciplines' },
];

export function AboutSection() {
  return (
    <Section id="about" className="mt-32">
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0a0a]/90 p-8 before:absolute before:left-0 before:top-1/2 before:h-40 before:w-40 before:-translate-y-1/2 before:rounded-full before:bg-gold/10 before:blur-3xl">
        <Grid cols={1} className="relative gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <RevealOnScroll>
            <div className="max-w-2xl">
              <SectionHeading
                eyebrow="About"
                title="A studio built around trust, detail, and timeless interiors."
                description="We are a collaborative design studio shaping homes and hospitality spaces with a calm editorial sensibility, strong spatial thinking, and meticulous craftsmanship."
              />
              <p className="mt-8 text-base leading-8 text-muted">
                Every project begins with listening. We shape each environment around the way it will be lived in, the rituals it will hold, and the atmosphere it should create over time.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="rounded-[28px] border border-white/10 bg-[#111111] p-8">
              <div className="grid gap-6 sm:grid-cols-3">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -4, transition: { duration: 0.25 } }}
                    className="rounded-[20px] border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-3xl font-light text-white">{stat.value}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.25em] text-muted">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 rounded-[24px] border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-gold/10 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-gold">Studio philosophy</p>
                <p className="mt-4 text-lg leading-8 text-muted">
                  Quiet luxury is not about excess. It is about clarity, proportion, and a sense of ease that remains long after the first impression.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </Grid>
      </div>
    </Section>
  );
}
