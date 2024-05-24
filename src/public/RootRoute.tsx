import { createRootRoute } from '@tanstack/react-router';
import { Navigate, createRoute } from '@tanstack/react-router';

import { PublicApp } from './PublicApp.js';

export const rootRoute = createRootRoute({
  component: PublicApp,
});

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

function Home() {
  return <Navigate to='/login' />;
}
