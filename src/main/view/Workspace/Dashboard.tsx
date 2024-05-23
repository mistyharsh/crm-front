import { Link } from '@adobe/react-spectrum';
import { Outlet, createRoute, useLinkProps, useParams } from '@tanstack/react-router';

import { newContactRoute } from '../Contact/NewContact';
import { workspaceRoute } from './workspaceRoute';
import { mainRoute } from '../../mainRoute';

export const dashboardRoute = createRoute({
  getParentRoute: () => workspaceRoute,
  path: '/',
  component: Dashboard,
});

export function Dashboard() {
  const { tenantId } = dashboardRoute.useParams();
  const mainRouteHref = useLinkProps({ to: mainRoute.to }).href;
  const newContactHref = useLinkProps({ to: newContactRoute.to, params: { tenantId } }).href;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is a protected route.</p>
      <Link href={mainRouteHref}>Go back</Link>
      <Link href={newContactHref}>New Contact</Link>
    </div>
  );
}
