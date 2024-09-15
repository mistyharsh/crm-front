import { Box } from '@mantine/core';
import type { ReactNode } from 'react';

export type AuthViewProps = {
  className: string;
  children: ReactNode;
};

export function AuthView(props: AuthViewProps) {
  const { className, children } = props;

  return (
    <Box
      className={className}
      bg={'gray.1'}
      p={'lg'}
      maw={'400px'}
      mx={'auto'}
      my={'lg'}
      bd={'1px solid'}
    >
      {children}
    </Box>
  );
}
