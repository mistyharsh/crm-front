import { createRoute } from '@tanstack/react-router';

import { mainRoute } from '../../mainRoute';

export const dashboardRoute = createRoute({
  getParentRoute: () => mainRoute,
  path: '/workspaces/$tenantId/dashboard',
  component: Dashboard,
});

export function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is a protected route.</p>
    </div>
  );
}
