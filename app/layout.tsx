import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Toaster } from '@/components/ui/sonner';
import ConvexClientProvider from '@/providers/convex-client-provider';
import ModalProvider from '@/providers/modal-provider';
import { cn } from '@/lib/utils';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Canvas',
  description: 'A whiteboard tool for timely collaboration'
  // icons: '/public/logo.svg'
};

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang='en'>
    <body className={cn('h-full font-sans antialiased', inter.className)}>
      <Toaster />
      <ConvexClientProvider>
        <ModalProvider />
        {children}
      </ConvexClientProvider>
    </body>
  </html>
);

export default RootLayout;
