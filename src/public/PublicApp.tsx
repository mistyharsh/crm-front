import { Outlet } from '@tanstack/react-router';

import { Shell } from '#shared/Shell/Shell.js';
import { AppHeader } from './Header/AppHeader.js';

export function PublicApp() {
  return <Shell header={() => <AppHeader />} main={<Outlet />} />;
}
