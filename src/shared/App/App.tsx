import { Provider, defaultTheme } from '@adobe/react-spectrum';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { useState, type ReactNode } from 'react';

import { AppContext, type ColorScheme } from './Provider.js';

export type AppProps = {
  children: ReactNode;
};

const queryClient = new QueryClient();

export function App(props: AppProps) {
  const { children } = props;
  const [scheme, setScheme] = useState<ColorScheme>('dark');

  const navigateRoute = useNavigate();

  const navigate = (to: string) => {
    navigateRoute({
      to: to as any,
    });
  };

  return (
    <AppContext.Provider value={{ setScheme }}>
      <QueryClientProvider client={queryClient}>
        <Provider
          data-cl='app'
          scale='medium'
          minHeight={'100vh'}
          theme={defaultTheme}
          colorScheme={scheme}
          router={{ navigate }}
        >
          {children}
        </Provider>
      </QueryClientProvider>
    </AppContext.Provider>
  );
}
