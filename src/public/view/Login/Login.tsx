import { Route } from '@tanstack/react-router';

import { rootRoute } from '../../Root';

export const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login,
});


export function Login() {
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
}
