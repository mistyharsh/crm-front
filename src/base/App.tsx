import { Provider, defaultTheme } from '@adobe/react-spectrum';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRouter } from '@tanstack/react-router';
import { type ReactNode } from 'react';

import { AppProvider } from './Provider.js';
import { theme } from './Theme.js';

export type AppProps = {
  children: ReactNode;
};

const queryClient = new QueryClient();

export function App(props: AppProps) {
  const { children } = props;
  const router = useRouter();

  return (
    <MantineProvider theme={theme}>
      <AppProvider>
        <QueryClientProvider client={queryClient}>
            <Provider
              UNSAFE_className='provider'
              data-cl='App'
              scale='medium'
              height={'100svh'}
              theme={defaultTheme}
              colorScheme={'dark'}
              router={{
                navigate(to, options: any) {
                  router.navigate({ to, ...options });
                },
                useHref(to) {
                  if (typeof to === 'string') {
                    return to;
                  }

                  const loc = router.buildLocation(to);

                  return loc.href;
                },
              }}
            >
              {children}
            </Provider>
        </QueryClientProvider>
      </AppProvider>
    </MantineProvider>
  );
}
