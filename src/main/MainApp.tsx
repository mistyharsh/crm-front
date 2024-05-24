import { Outlet } from '@tanstack/react-router';

import { App } from '#shared/App/App.js';
import { MainAppHeader } from './Header/AppHeader.js';

export function MainApp() {
  return (
    <App>
      <MainAppHeader />
      <Outlet />
    </App>
  );
}
