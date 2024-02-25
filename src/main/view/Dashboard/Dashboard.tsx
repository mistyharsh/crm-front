import { createRoute } from '@tanstack/react-router';

import { rootRoute } from '../../Root';


export const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
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
