import { createRouter } from '@tanstack/react-router';

import { rootRoute } from './RootRoute.js';
import { workspaceRoute } from './View/Workspace/WWorkspaceRoute.js';
import { homeRoute } from './View/Home/Home.js';
import { dashboardRoute } from './View/Workspace/Dashboard.js';
import { newContactRoute } from './View/Contact/NewContact.js';

export const routeTree = rootRoute.addChildren([
  homeRoute,
  workspaceRoute.addChildren([dashboardRoute, newContactRoute]),
]);

export const router = createRouter({
  routeTree,
  basepath: '/',
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
