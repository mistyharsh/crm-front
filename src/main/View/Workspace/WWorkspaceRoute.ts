import { Outlet, createRoute } from '@tanstack/react-router';

import { rootRoute } from '../../RootRoute.js';

export const workspaceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/workspaces/$tenantId',
  component: Outlet,
});
