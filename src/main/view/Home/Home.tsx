import { createRoute } from '@tanstack/react-router';

import { mainRoute } from '../../mainRoute';


export const homeRoute = createRoute({
  getParentRoute: () => mainRoute,
  component: Home,
  path: '/',
});

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>This is home route.</p>
    </div>
  );
}
