import { StrictMode } from 'react';
import { Router, RouterProvider } from '@tanstack/react-router';

import { run } from './App/run';
import { rootRoute } from './public/Root';
import { loginRoute } from './public/view/Login/Login';
import { forgetRoute } from './public/view/Reset/Forget';
import { resetRoute } from './public/view/Reset/Reset';

const routeTree = rootRoute.addChildren([
  loginRoute,
  forgetRoute,
  resetRoute,
]);

const router = new Router({
  routeTree,
  basepath: '/public',
});

// declare module '@tanstack/react-router' {
//   interface Register {
//     router: typeof router;
//   }
// }

function Public() {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

run({
  component: Public,
});
