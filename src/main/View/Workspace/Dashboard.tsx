import { Link } from '@adobe/react-spectrum';
import { createRoute, useLinkProps } from '@tanstack/react-router';

import { rootRoute } from '../../RootRoute.js';
import { newContactRoute } from '../Contact/NewContact.js';
import { workspaceRoute } from './WorkspaceRoute.js';

export const dashboardRoute = createRoute({
  getParentRoute: () => workspaceRoute,
  path: '/',
  component: Dashboard,
});

export function Dashboard() {
  const { tenantId } = dashboardRoute.useParams();
  const mainRouteHref = useLinkProps({ to: rootRoute.to }).href;
  const newContactHref = useLinkProps({
    to: newContactRoute.to,
    params: { tenantId },
  }).href;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is a protected route.</p>
      <Link href={mainRouteHref}>Go back</Link>
      <Link href={newContactHref}>New Contact</Link>
    </div>
  );
}
