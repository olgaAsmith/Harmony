import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header/Header';
import { Inter } from 'next/font/google';
import { ApolloWrapper } from '../../apollo-client';
import ProfileLoader from '@/components/ProfileLoader';

export const metadata: Metadata = {
  title: 'Harmony',
  description: 'Harmony',
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`max-w-[1536px] w-full mx-auto${inter.className} scrollbar`}>
        <ApolloWrapper>
          <ProfileLoader></ProfileLoader>
          <Header></Header>
          <main>{children}</main>
        </ApolloWrapper>
      </body>
    </html>
  );
}
