import { Route } from '@tanstack/react-router';

import { rootRoute } from '../../Root';

export const forgetRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/forget-password',
  component: Forget,
});


export function Forget() {
  return (
    <div>
      <h1>Forget Password</h1>
    </div>
  );
}
