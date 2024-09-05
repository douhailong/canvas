import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { cn } from '@/lib/utils';
import ConvexClientProvider from '@/providers/convex-client-provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Canvas',
  description: 'A whiteboard tool for timely collaboration'
};

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang='en'>
    <body className={cn('h-full font-sans antialiased', inter.className)}>
      <ConvexClientProvider>{children}</ConvexClientProvider>
    </body>
  </html>
);

export default RootLayout;
