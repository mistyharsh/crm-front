import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { useState } from 'react';

import { App, type ColorScheme } from '../App/App';
import { AppHeader } from './Header/AppHeader';

export const rootRoute = createRootRoute({
  component: Root,
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
