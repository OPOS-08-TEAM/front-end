import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Footer, Header } from '@/components';

import { WrapperProvider } from './wrapper-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OPOS',
  description: 'OPOS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className="pointer-events-none fixed -z-50 h-screen w-screen"
          style={{
            background: 'rgb(253,245,221)',
          }}
        />

        <WrapperProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </WrapperProvider>
      </body>
    </html>
  );
}
