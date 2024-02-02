import { Heading, Avatar, Flex } from '@adobe/react-spectrum';
import { Route } from '@tanstack/react-router';

import { rootRoute } from '../../Root';

import LoginForm from './LoginForm';
import styles from './login.module.css';

export const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login,
});

export function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.loginForm}>
        <Avatar
          src='https://i.imgur.com/kJOwAdv.png'
          alt='default Adobe avatar'
          size='avatar-size-10000'
        />
        <Flex direction='column'>
          <Heading level={1} alignSelf='self-start'>
            Log-in
          </Heading>
          <LoginForm />
        </Flex>
      </div>
    </div>
  );
}
