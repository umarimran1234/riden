import type { Metadata } from 'next'
import './globals.css'
import { Bebas_Neue, Outfit, Audiowide } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Riden website',
  description: 'Riden',

}
const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
});
const audiowide = Audiowide({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-audiowide',
});
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={` ${audiowide.variable}, ${bebas.variable} ${outfit.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Audiowide:wght@400&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-outfit" >{children}</body>
    </html>
  )
}
