import { Outlet } from '@tanstack/react-router';

import { Shell } from '#shared/Shell/Shell.js';
import { Navigation } from './Navigation.js';
import { AppHeader } from './AppHeader.js';

export function AppShell() {
  return (
    <Shell
      header={(_isOpen, open) => <AppHeader onOpen={open} />}
      sidebar={(_isOpen, _open, close) => <Navigation />}
      main={<Outlet />}
    />
  );
}
