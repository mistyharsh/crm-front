import { createRouter } from '@tanstack/react-router';

import { rootRoute } from '../App/App';
import { mainRoute } from './mainRoute';
import { dashboardRoute } from './view/Dashboard/Dashboard';
import { homeRoute } from './view/Home/Home';

export const mainTree = mainRoute.addChildren([homeRoute, dashboardRoute]);

const routeTree = rootRoute.addChildren([mainTree]);

export const router = createRouter({
  routeTree,
  basepath: '/',
});
