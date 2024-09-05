import { Provider, defaultTheme } from '@adobe/react-spectrum';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRouter } from '@tanstack/react-router';
import { useState, type ReactNode } from 'react';

import { AppContext, type ColorScheme } from './Provider.js';

export type AppProps = {
  children: ReactNode;
};

const queryClient = new QueryClient();

export function App(props: AppProps) {
  const { children } = props;
  const [scheme, setScheme] = useState<ColorScheme>('dark');

  const router = useRouter();

  return (
    <AppContext.Provider value={{ setScheme }}>
      <QueryClientProvider client={queryClient}>
        <Provider
          UNSAFE_className='provider'
          data-cl='App'
          scale='medium'
          height={'100svh'}
          theme={defaultTheme}
          colorScheme={scheme}
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
    </AppContext.Provider>
  );
}
