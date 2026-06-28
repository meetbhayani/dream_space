import type { Metadata } from 'next';
import './globals.css';
import { LenisProvider } from '@/providers/LenisProvider';

export const metadata: Metadata = {
  title: 'Dream Space Studio',
  description: 'Luxury interior design and architecture studio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
