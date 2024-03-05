import { createRoute } from '@tanstack/react-router';

import { rootRoute } from '../App/App';
import { PublicApp } from './Public';

export const publicRoute = createRoute({
  getParentRoute: () => rootRoute,
  component: PublicApp,
  path: '/public',
});
