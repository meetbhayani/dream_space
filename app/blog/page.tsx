import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { blogService } from '@/services/blog.service';

export const metadata: Metadata = {
  title: 'Journal',
  description: 'Explore the Dream Space Studio journal — insights on luxury interior design, materials, process, and inspiration for premium living spaces.',
  openGraph: {
    title: 'Design Journal | Dream Space Studio',
    description: 'Read articles on luxury interior design trends, material stories, and project insights.',
  },
};

export default async function BlogPage() {
  const result = await blogService.getPosts({});
  const categories = await blogService.getCategories();

  return (
    <main className="bg-background text-white">
      <Section className="mt-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">
          <div className="mb-16">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gold">Journal</p>
            <h1 className="text-5xl font-light leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Design stories & insights
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              Thoughts on materials, process, lighting, and the craft of creating timeless interiors.
            </p>
          </div>

          <div className="mb-12 flex flex-wrap gap-3">
            <Link
              href="/blog"
              className="rounded-full border border-gold/50 bg-gold/10 px-5 py-2 text-xs uppercase tracking-[0.2em] text-gold"
            >
              All
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/blog?category=${cat.slug}`}
                className="rounded-full border border-white/10 px-5 py-2 text-xs uppercase tracking-[0.2em] text-muted transition hover:border-white/20 hover:text-white"
              >
                {cat.name}
              </Link>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {result.items.map((post) => (
              <a
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group rounded-[24px] border border-white/10 bg-[#0c0c0c] p-6 transition hover:border-gold/30"
              >
                <div className="mb-4 aspect-[16/10] rounded-[20px] border border-white/10 bg-gradient-to-br from-white/5 to-transparent" />
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-muted">
                  <span>{post.category.name}</span>
                  <span className="text-gold/50">&bull;</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-3 text-xl font-light leading-tight text-white">{post.title}</h2>
                <p className="mt-2 text-sm leading-7 text-muted">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold">
                  <span>Read</span>
                  <span className="transition group-hover:translate-x-1">&rarr;</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
