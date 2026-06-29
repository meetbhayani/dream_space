import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Section } from '@/components/ui/Section';
import { Divider } from '@/components/ui/Divider';
import { blogService } from '@/services/blog.service';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await blogService.getPostBySlug(slug);
  if (!post) return {};

  const seo = await blogService.getSeoMetadata(slug);
  return {
    title: seo?.title ?? post.title,
    description: seo?.description ?? post.excerpt,
    openGraph: {
      title: seo?.title ?? post.title,
      description: seo?.description ?? post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await blogService.getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await blogService.getRelatedPosts(slug, post.category.slug, 3);

  return (
    <main className="bg-background text-white">
      <Section className="mt-24">
        <div className="mx-auto max-w-[760px] px-6 md:px-8 lg:px-12">
          <div className="mb-12">
            <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted">
              <Link href="/blog" className="text-gold transition hover:text-white">Journal</Link>
              <span className="text-gold/50">&rarr;</span>
              <span>{post.category.name}</span>
            </div>

            <h1 className="text-4xl font-light leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            <div className="mt-6 flex items-center gap-4 text-sm text-muted">
              <span>{post.author.name}</span>
              <span className="text-gold/50">&bull;</span>
              <span>{post.readTime}</span>
              <span className="text-gold/50">&bull;</span>
              <span>{new Date(post.publishedAt ?? post.createdAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            {post.content.split('\n').map((line, i) => {
              if (line.startsWith('# ')) {
                return <h1 key={i} className="mb-6 mt-12 text-3xl font-light text-white">{line.replace('# ', '')}</h1>;
              }
              if (line.startsWith('## ')) {
                return <h2 key={i} className="mb-4 mt-10 text-2xl font-light text-white">{line.replace('## ', '')}</h2>;
              }
              if (line.startsWith('### ')) {
                return <h3 key={i} className="mb-3 mt-8 text-xl font-light text-white">{line.replace('### ', '')}</h3>;
              }
              if (line.startsWith('- ')) {
                return <li key={i} className="ml-4 list-disc text-muted">{line.replace('- ', '')}</li>;
              }
              if (line.trim() === '') {
                return <div key={i} className="h-4" />;
              }
              return <p key={i} className="text-base leading-8 text-muted">{line}</p>;
            })}
          </div>

          {post.tags.length > 0 && (
            <div className="mt-12 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.15em] text-muted">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <Divider className="my-16" />

          {relatedPosts.length > 0 && (
            <div>
              <h2 className="mb-8 text-sm uppercase tracking-[0.35em] text-gold">Related articles</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((rp) => (
                  <a
                    key={rp.id}
                    href={`/blog/${rp.slug}`}
                    className="rounded-[20px] border border-white/10 bg-white/5 p-5 transition hover:border-gold/30"
                  >
                    <p className="text-sm text-white">{rp.title}</p>
                    <p className="mt-2 text-xs text-muted">{rp.readTime}</p>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>
    </main>
  );
}
