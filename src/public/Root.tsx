import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet, createRoute } from '@tanstack/react-router';
import { useState } from 'react';

import { App, rootRoute, type ColorScheme } from '../App/App';
import { AppHeader } from './Header/AppHeader';

export const publicRoute = createRoute({
  getParentRoute: () => rootRoute,
  component: Root,
  path: '/public',
});

const queryClient = new QueryClient();

export function Root() {
  const [scheme, setScheme] = useState<ColorScheme>('dark');

  return (
    <QueryClientProvider client={queryClient}>
      <App colorScheme={scheme}>
        <AppHeader onColorSchemeChange={setScheme} />
        <Outlet />
      </App>
    </QueryClientProvider>
  );
}
