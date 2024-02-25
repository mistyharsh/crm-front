import { StrictMode } from 'react';
import { RouterProvider, createRouter } from '@tanstack/react-router';

import { run } from './App/run';
import { rootRoute } from './main/Root';
import { dashboardRoute } from './main/view/Dashboard/Dashboard';

const routeTree = rootRoute.addChildren([
  dashboardRoute,
]);

const router = createRouter({
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
