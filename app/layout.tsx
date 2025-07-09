// app/layout.tsx

import type { Metadata } from 'next';
import './globals.css';
import { Bebas_Neue, Outfit, Audiowide } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';

// SEO Meta
export const metadata: Metadata = {
  title: 'Riden website',
  description: 'Riden',
};

// Fonts
const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
});

const audiowide = Audiowide({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-audiowide',
});

const outfit = Outfit({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-outfit',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${audiowide.variable} ${bebas.variable} ${outfit.variable}`}
    >
      <body className="font-outfit">
        <Header />
        <main className='font-outfit' >{children}</main>
        <Footer />
      </body>
    </html>
  );
}
