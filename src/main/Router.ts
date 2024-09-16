import { createRouter } from '@tanstack/react-router';

import { queryClient } from '#base/App.js';
import { rootRoute } from './RootRoute.js';
import { contactListRoute } from './View/Contact/Contacts.js';
import { newContactRoute } from './View/Contact/NewOrgContact.js';
import { newPersonContactRoute } from './View/Contact/NewPersonContact.js';
import { homeRoute } from './View/Home/Home.js';
import { dashboardRoute } from './View/Workspace/Dashboard.js';
import { workspaceRoute } from './View/Workspace/WorkspaceRoute.js';
import { userListRoute } from './View/Tenant/Users.js';
import { setEmptyList } from './Data/UseTenant.js';

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

setEmptyList(queryClient);

export const router = createRouter({
  routeTree,
  basepath: '/',
  context: {
    queryClient,
  },
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
