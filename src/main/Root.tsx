import { Heading } from '@adobe/react-spectrum';
import { Outlet, createRootRoute } from '@tanstack/react-router';

import { App } from '../App/App';

export const rootRoute = createRootRoute({
  component: Root,
});

export function Root() {
  return (
    <App colorScheme='light'>
      <Heading level={1}>Protected App</Heading>
      <Outlet />
    </App>
  );
}
