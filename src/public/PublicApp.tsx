import { Outlet } from '@tanstack/react-router';

import { App } from '../shared/App/App.js';
import { AppHeader } from './Header/AppHeader.js';

export function PublicApp() {
  return (
    <App>
      <AppHeader />
      <Outlet />
    </App>
  );
}
