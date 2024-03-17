import { Provider, defaultTheme } from '@adobe/react-spectrum';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet, createRootRoute, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { AppContext, type ColorScheme } from './Provider';


export const rootRoute = createRootRoute({
  component: App,
});

const queryClient = new QueryClient();

export function App() {
  const [scheme, setScheme] = useState<ColorScheme>('dark');

  const navigateRoute = useNavigate();

  const navigate = (to: string) => {
    navigateRoute({
      to: to as any,
    });
  };

  return (
    <AppContext.Provider value={({ setScheme })}>
      <QueryClientProvider client={queryClient}>
        <Provider
          data-cl='app'
          scale='medium'
          minHeight={'100vh'}
          theme={defaultTheme}
          colorScheme={scheme}
          router={{ navigate }}
          >
          <Outlet />
        </Provider>
      </QueryClientProvider>
    </AppContext.Provider>
  );
}
