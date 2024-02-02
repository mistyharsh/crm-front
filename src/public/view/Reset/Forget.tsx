import { Route } from '@tanstack/react-router';

import { rootRoute } from '../../Root';

import ForgetForm from './ForgetForm';
import styles from './ForgetForm.module.css';

export const forgetRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/forget-password',
  component: Forget,
});

export function Forget() {
  return (
    <div className={styles.baseContainer}>
      <div className={styles.formStyle}>
        <ForgetForm />
      </div>
    </div>
  );
}
