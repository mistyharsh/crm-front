import {
  createRouter,
  type NavigateOptions,
  type ToOptions,
} from '@tanstack/react-router';

import { rootRoute } from './RootRoute.js';
import { contactListRoute } from './View/Contact/Contacts.js';
import { newContactRoute } from './View/Contact/NewOrgContact.js';
import { newPersonContactRoute } from './View/Contact/NewPersonContact.js';
import { homeRoute } from './View/Home/Home.js';
import { dashboardRoute } from './View/Workspace/Dashboard.js';
import { workspaceRoute } from './View/Workspace/WorkspaceRoute.js';
import { userListRoute } from './View/Tenant/Users.js';

export const routeTree = rootRoute.addChildren([
  homeRoute,
  workspaceRoute.addChildren([
    dashboardRoute,
    contactListRoute,
    userListRoute,
    newContactRoute,
    newPersonContactRoute,
  ]),
]);

export const router = createRouter({
  routeTree,
  basepath: '/',
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

declare module '@adobe/react-spectrum' {
  interface RouterConfig {
    href: ToOptions;
    routerOptions: Omit<NavigateOptions, keyof ToOptions>;
  }
}
