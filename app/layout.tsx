import type { Metadata } from 'next';
import './globals.css';
import { LenisProvider } from '@/providers/LenisProvider';
import { ScrollProgress } from '@/components/navigation/ScrollProgress';
import { Cursor } from '@/components/navigation/Cursor';
import { DEFAULT_METADATA } from '@/constants/metadata';
import { OrganizationStructuredData, LocalBusinessStructuredData } from '@/lib/seo/structured-data';
import { PageTransition } from '@/components/ui/PageTransition';
import { LoadingScreen } from '@/components/ui/LoadingScreen';
import { CursorGlow } from '@/components/ui/CursorGlow';

export const metadata: Metadata = {
  title: DEFAULT_METADATA.title,
  description: DEFAULT_METADATA.description,
  keywords: [...DEFAULT_METADATA.keywords],
  authors: [...DEFAULT_METADATA.authors],
  creator: DEFAULT_METADATA.creator,
  publisher: DEFAULT_METADATA.publisher,
  openGraph: { ...DEFAULT_METADATA.openGraph, images: [...DEFAULT_METADATA.openGraph.images] },
  twitter: {
    card: DEFAULT_METADATA.twitter.card,
    title: DEFAULT_METADATA.twitter.title,
    description: DEFAULT_METADATA.twitter.description,
    images: [...DEFAULT_METADATA.twitter.images],
  },
  robots: { ...DEFAULT_METADATA.robots },
  alternates: { ...DEFAULT_METADATA.alternates },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <OrganizationStructuredData />
        <LocalBusinessStructuredData />
        <LoadingScreen />
        <CursorGlow />
        <LenisProvider>
          <ScrollProgress />
          <Cursor />
          <PageTransition>{children}</PageTransition>
        </LenisProvider>
      </body>
    </html>
  );
}
