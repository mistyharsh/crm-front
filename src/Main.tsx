import { StrictMode } from 'react';
import { RouterProvider, createRouter } from '@tanstack/react-router';

import { rootRoute } from './App/App';
import { run } from './App/run';

import { mainRoute } from './main/Root';
import { dashboardRoute } from './main/view/Dashboard/Dashboard';

export const mainTree = mainRoute.addChildren([
  dashboardRoute,
]);

const routeTree = rootRoute.addChildren([mainTree]);

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
