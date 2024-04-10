import StreamVideoProvider from '@/providers/StreamClientProvider';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Huddle',
  description: 'Video calling app',
  icons: {
    icon: '/icons/logo.svg',
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
