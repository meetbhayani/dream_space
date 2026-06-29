import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center text-white">
      <p className="mb-6 text-sm uppercase tracking-[0.35em] text-gold">404</p>
      <h1 className="text-6xl font-light leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">
        Page not found
      </h1>
      <p className="mt-6 max-w-md text-lg text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center rounded-full bg-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.25em] text-black transition hover:bg-gold/90"
      >
        Return home
      </Link>
    </main>
  );
}
