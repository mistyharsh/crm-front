import { createRouter } from '@tanstack/react-router';

import { rootRoute } from './App/App';
import { mainTree } from './main/router';
import { publicTree } from './public/router';


// This file is only for type checking and not for bundling.
// We have two different types of routers, one for Main and another for Public app.
// With `@tanstack/react-router`, we need to use module augmentation to add the type
// for the top-level functions like hooks. Without module augmentation, providing types
// is nearly impossible.
const routeTree = rootRoute.addChildren([
  publicTree,
  mainTree,
]);

const router = createRouter({
  routeTree,
  basepath: '/',
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
