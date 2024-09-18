import { Paper } from '@mantine/core';
import type { ReactNode } from 'react';

export type AuthViewProps = {
  className: string;
  children: ReactNode;
};

export function AuthView(props: AuthViewProps) {
  const { className, children } = props;

  return (
    <Paper
      withBorder={false}
      className={className}
      p={'lg'}
      maw={'400px'}
      mx={'auto'}
      my={'lg'}
    >
      {children}
    </Paper>
  );
}
