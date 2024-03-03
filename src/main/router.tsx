import { StrictMode } from 'react';
import { RouterProvider, createRouter } from '@tanstack/react-router';

import { rootRoute } from '../App/App';

import { mainRoute } from './rootRoute';
import { dashboardRoute } from './view/Dashboard/Dashboard';

export const mainTree = mainRoute.addChildren([
  dashboardRoute,
]);

const routeTree = rootRoute.addChildren([mainTree]);

export const router = createRouter({
  routeTree,
  basepath: '/',
});
