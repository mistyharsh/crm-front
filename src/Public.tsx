import { StrictMode } from 'react';
import { RouterProvider, createRouter } from '@tanstack/react-router';

import { rootRoute } from './App/App';
import { run } from './App/run';

import { publicRoute } from './public/Root';
import { loginRoute } from './public/view/Login/Login';
import { forgotRoute } from './public/view/Reset/Forgot';
import { resetRoute } from './public/view/Reset/Reset';

export const publicTree = publicRoute.addChildren([
  loginRoute,
  forgotRoute,
  resetRoute
]);

const routeTree = rootRoute.addChildren([publicTree]);
const router = createRouter({
  routeTree,
  basepath: '/',
});

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
