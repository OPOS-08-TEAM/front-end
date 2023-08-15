'use client';

import 'aos/dist/aos.css';

import AOS from 'aos';
import { type ReactNode, useEffect } from 'react';
import { QueryClientProvider } from 'react-query';

import { queryClient } from '@/config';

type Props = {
  children: ReactNode;
};

export const WrapperProvider = ({ children }: Props) => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
