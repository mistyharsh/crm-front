import { Heading } from '@adobe/react-spectrum';
import { Outlet, createRoute } from '@tanstack/react-router';

import { App, rootRoute } from '../App/App';

export const mainRoute = createRoute({
  getParentRoute: () => rootRoute,
  component: Root,
  path: '/',
});

export function Root() {
  return (
    <App colorScheme='light'>
      <Heading level={1}>Protected App</Heading>
      <Outlet />
    </App>
  );
}
