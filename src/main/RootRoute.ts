import { createRootRoute } from '@tanstack/react-router';

import { MainApp } from './MainApp.js';

export const rootRoute = createRootRoute({
  component: MainApp,
});
