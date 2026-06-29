import type { Metadata } from 'next';
import './globals.css';
import { LenisProvider } from '@/providers/LenisProvider';
import { ScrollProgress } from '@/components/navigation/ScrollProgress';
import { PageTransition } from '@/components/ui/PageTransition';
import { LoadingScreen } from '@/components/ui/LoadingScreen';
import { CursorGlow } from '@/components/ui/CursorGlow';

export const metadata: Metadata = {
  title: 'Dream Space Studio',
  description: 'Luxury interior design and architecture studio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LoadingScreen />
        <CursorGlow />
        <LenisProvider>
          <ScrollProgress />
          <PageTransition>{children}</PageTransition>
        </LenisProvider>
      </body>
    </html>
  );
}
