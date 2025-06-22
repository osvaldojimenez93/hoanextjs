import '@/app/styles/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'North San Antonio Hills HOA',
  description: 'Official website for North San Antonio Hills Homeowners Association',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
