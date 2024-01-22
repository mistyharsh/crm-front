import { Heading } from '@adobe/react-spectrum';
import { Outlet, RootRoute } from '@tanstack/react-router';

import { App } from '../App/App';

export const rootRoute = new RootRoute({
  component: Root,
});


export function Root() {
  return (
    <App>
      <Heading level={1}>Public App</Heading>
      <Outlet />
    </App>
  );
}
