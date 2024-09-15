import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header/Header';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Harmony',
  description: 'Harmony',
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`max-w-[1536px] w-full mx-auto${inter.className}`}>
        <Header></Header>
        <main>{children}</main>
      </body>
    </html>
  );
}
