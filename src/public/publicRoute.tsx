import { Navigate, createRoute } from '@tanstack/react-router';

import { rootRoute } from '../App/App';
import { PublicApp } from './Public';

export const publicRoute = createRoute({
  getParentRoute: () => rootRoute,
  component: PublicApp,
  path: '/public',
});


export const homeRoute = createRoute({
  getParentRoute: () => publicRoute,
  path: '/',
  component: function ToLogin() {
    return (
      <Navigate to='/public/login' />
    );
  },
});
