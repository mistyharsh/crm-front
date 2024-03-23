import { createRoute } from '@tanstack/react-router';

import { rootRoute } from '../App/App';
import { MainApp } from './Main';

export const mainRoute = createRoute({
  getParentRoute: () => rootRoute,
  component: MainApp,
  id: 'MainApp',
});
