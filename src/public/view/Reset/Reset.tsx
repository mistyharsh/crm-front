import { Route } from '@tanstack/react-router';

import { rootRoute } from '../../Root';

export const resetRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/reset-password/$resetToken',
  component: Reset,
});


export function Reset() {

  return (
    <div>
      <h1>Reset Password</h1>
    </div>
  );
}
