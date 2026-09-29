import type { Metadata } from 'next';
import { Space_Grotesk, Spline_Sans } from 'next/font/google';
import './globals.css';
import { Background } from '@/components/layout/Background';
import { Cursor } from '@/components/layout/Cursor';
import { Loader } from '@/components/layout/Loader';
import { site } from '@/data/site';

const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });
const spline = Spline_Sans({ subsets: ['latin'], variable: '--font-spline' });

export const metadata: Metadata = {
  title: `${site.name} - Reels & Short Films`,
  description: site.description,
  icons: {
    icon: '/trikonic-logo-transparent.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${space.variable} ${spline.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>
        <Loader />
        <Background />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
