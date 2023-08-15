'use client';

import { type ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Component = ({ children }: Props) => {
  return <div className="container mx-auto space-y-16">{children}</div>;
};
