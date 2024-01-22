import { StrictMode } from 'react';
import { Router, RouterProvider } from '@tanstack/react-router';

import { run } from './App/run';
import { rootRoute } from './main/Root';

const routeTree = rootRoute.addChildren([
]);

const router = new Router({
  routeTree,
  basepath: '/',
});


function Main() {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

run({
  component: Main,
});
