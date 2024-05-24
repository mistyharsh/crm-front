import { createRouter } from '@tanstack/react-router';

import { rootRoute } from '../App/App';
import { mainRoute } from './mainRoute';
import { workspaceRoute } from './view/Workspace/workspaceRoute';
import { homeRoute } from './view/Home/Home';
import { dashboardRoute } from './view/Workspace/Dashboard';
import { newContactRoute } from './view/Contact/NewContact';

const tree = workspaceRoute.addChildren([dashboardRoute, newContactRoute]);

export const mainTree = mainRoute.addChildren([homeRoute, tree]);

const routeTree = rootRoute.addChildren([mainTree]);

export const router = createRouter({
  routeTree,
  basepath: '/',
});
