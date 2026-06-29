import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Grid } from '@/components/ui/Grid';
import { Divider } from '@/components/ui/Divider';
import { COMPANY_INFO } from '@/constants/site';
import { STATISTICS_DATA } from '@/data/statistics';
import { TEAM_DATA } from '@/data/team';

export const metadata: Metadata = {
  title: 'About',
  description: `Learn about Dream Space Studio — a luxury interior design and architecture studio based in ${COMPANY_INFO.address.city}, crafting cinematic living experiences since ${COMPANY_INFO.foundedYear}.`,
  openGraph: {
    title: `About Dream Space Studio | Luxury Interior Designers in ${COMPANY_INFO.address.city}`,
    description: COMPANY_INFO.description,
  },
};

export default function AboutPage() {
  return (
    <main className="bg-background text-white">
      <Section className="mt-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">
          <div className="mb-16">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gold">About</p>
            <h1 className="text-5xl font-light leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Crafting cinematic living experiences
            </h1>
          </div>

          <Grid cols={1} className="gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-base leading-8 text-muted">{COMPANY_INFO.description}</p>
              <p className="mt-6 text-base leading-8 text-muted">
                Founded in {COMPANY_INFO.foundedYear}, our studio brings together architects, interior designers, and craftspeople who share a common belief: that the best interiors are quiet, considered, and deeply personal.
              </p>
              <p className="mt-6 text-base leading-8 text-muted">
                Based in {COMPANY_INFO.address.city}, we work with clients across India who seek thoughtful, high-end environments that stand the test of time.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-gold">Studio</p>
              <div className="space-y-4 text-sm text-muted">
                <p>{COMPANY_INFO.address.formatted}</p>
                <p>{COMPANY_INFO.operatingHours.formatted}</p>
                <p>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-white transition hover:text-gold">{COMPANY_INFO.email}</a>
                </p>
                <p>
                  <a href={`tel:${COMPANY_INFO.phone.value}`} className="text-white transition hover:text-gold">{COMPANY_INFO.phone.display}</a>
                </p>
              </div>
            </div>
          </Grid>

          <Divider className="my-20" />

          <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {STATISTICS_DATA.filter((s) => s.featured).map((stat) => (
              <div key={stat.id} className="rounded-[20px] border border-white/10 bg-white/5 p-5 text-center">
                <p className="text-3xl font-light text-white">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gold">{stat.label}</p>
                <p className="mt-1 text-[10px] text-muted">{stat.description}</p>
              </div>
            ))}
          </div>

          <Divider className="my-20" />

          <div className="mb-20">
            <h2 className="mb-2 text-sm uppercase tracking-[0.35em] text-gold">Team</h2>
            <p className="mb-10 text-2xl font-light text-white">The people behind the craft</p>
            <Grid cols={2} className="gap-8">
              {TEAM_DATA.map((member) => (
                <div key={member.id} className="rounded-[24px] border border-white/10 bg-[#0c0c0c] p-8">
                  <div className="mb-6 aspect-square w-24 rounded-full border border-white/10 bg-gradient-to-br from-white/5 to-transparent" />
                  <h3 className="text-xl font-light text-white">{member.name}</h3>
                  <p className="mt-1 text-sm text-gold">{member.role}</p>
                  <p className="mt-4 text-sm leading-7 text-muted">{member.biography}</p>
                  {member.credentials.length > 0 && (
                    <ul className="mt-4 space-y-1">
                      {member.credentials.map((cred) => (
                        <li key={cred} className="text-xs text-muted">&mdash; {cred}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </Grid>
          </div>
        </div>
      </Section>
    </main>
  );
}
