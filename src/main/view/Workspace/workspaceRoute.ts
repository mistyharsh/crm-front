import { Outlet, createRoute } from '@tanstack/react-router';

import { mainRoute } from '../../mainRoute';

export const workspaceRoute = createRoute({
  getParentRoute: () => mainRoute,
  path: '/workspaces/$tenantId',
  component: Outlet,
});
