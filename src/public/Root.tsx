import { Outlet, RootRoute } from '@tanstack/react-router';
import { useState } from 'react';

import { App, type ColorScheme } from '../App/App';
import { AppHeader } from './Header/AppHeader';

export const rootRoute = new RootRoute({
  component: Root,
});

export function Root() {
  const [scheme, setScheme] = useState<ColorScheme>('dark');

  return (
    <App colorScheme={scheme}>
      <AppHeader
        onColorSchemeChange={setScheme} />
      <Outlet />
    </App>
  );
}
