import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type ReactNode } from 'react';

import { AppProvider } from './Provider.js';
import { resolver, theme } from './Theme.js';

export type AppProps = {
  children: ReactNode;
};

export const queryClient = new QueryClient();

export function App(props: AppProps) {
  const { children } = props;

  return (
    <MantineProvider theme={theme} withCssVariables={false} cssVariablesResolver={resolver}>
      <QueryClientProvider client={queryClient}>
        <AppProvider>{children}</AppProvider>
      </QueryClientProvider>
    </MantineProvider>
  );
}
