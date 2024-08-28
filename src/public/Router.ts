import {
  createRouter,
  type NavigateOptions,
  type ToOptions,
} from '@tanstack/react-router';

import { homeRoute, rootRoute } from './RootRoute.js';
import { invitationRoute } from './View/Invitation/Claim.js';
import { loginRoute } from './View/Login/Login.js';
import { forgotRoute } from './View/Reset/Forgot.js';
import { resetRoute } from './View/Reset/Reset.js';

export const routeTree = rootRoute.addChildren([
  homeRoute,
  loginRoute,
  forgotRoute,
  resetRoute,
  invitationRoute,
]);

export const router = createRouter({
  routeTree,
  basepath: '/public',
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
