import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Accordion } from '@/components/ui/Accordion';
import { FAQ_DATA } from '@/data/faq';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Dream Space Studio — pricing, process, materials, and how we deliver luxury interior design projects.',
  openGraph: {
    title: 'FAQ | Dream Space Studio',
    description: 'Answers to common questions about our luxury interior design services and process.',
  },
};

export default function FAQPage() {
  const accordionItems = FAQ_DATA.map((item) => ({
    title: item.question,
    content: <p className="text-base leading-8 text-muted">{item.answer}</p>,
  }));

  return (
    <main className="bg-background text-white">
      <Section className="mt-24">
        <div className="mx-auto max-w-[760px] px-6 md:px-8 lg:px-12">
          <div className="mb-16">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gold">FAQ</p>
            <h1 className="text-5xl font-light leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Common questions
            </h1>
            <p className="mt-6 text-lg text-muted">
              Everything you need to know about working with Dream Space Studio.
            </p>
          </div>

          <Accordion items={accordionItems} />
        </div>
      </Section>
    </main>
  );
}
