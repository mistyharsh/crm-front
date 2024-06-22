import { createRouter } from '@tanstack/react-router';

import { rootRoute } from './RootRoute.js';
import { contactListRoute } from './View/Contact/Contact.js';
import { newContactRoute } from './View/Contact/NewContact.js';
import { newPersonContactRoute } from './View/Contact/NewPersonContactForm.js';
import { homeRoute } from './View/Home/Home.js';
import { dashboardRoute } from './View/Workspace/Dashboard.js';
import { workspaceRoute } from './View/Workspace/WorkspaceRoute.js';

export const routeTree = rootRoute.addChildren([
  homeRoute,
  workspaceRoute.addChildren([
    dashboardRoute,
    contactListRoute,
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
