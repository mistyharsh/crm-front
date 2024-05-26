import { Divider, Flex, Heading, Link } from '@adobe/react-spectrum';
import Compass from '@spectrum-icons/workflow/Compass';
import { useMutation } from '@tanstack/react-query';
import { createRoute, useLinkProps } from '@tanstack/react-router';
import ky from 'ky';
import { useEffect } from 'react';

import { AuthView } from '../../Component/AuthView.js';
import { rootRoute } from '../../RootRoute.js';
import { forgotRoute } from '../Reset/Forgot.js';
import { resetRoute } from '../Reset/Reset.js';
import { LoginForm, type Credentials } from './LoginForm.js';

export const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login,
});

async function login(credentials: Credentials): Promise<any> {
  const response = await ky
    .post('/auth/login/password', {
      json: {
        username: credentials.email,
        password: credentials.password,
      },
    })
    .json();

  return response;
}

export function Login() {
  // TODO: Add error handling
  const { isPending, isSuccess, mutate } = useMutation({
    mutationFn: login,
  });
  const { href: forgotHref } = useLinkProps({ to: forgotRoute.to });
  const { href: resetHref } = useLinkProps({
    to: resetRoute.to,
    params: { resetToken: 'resetToken' },
  });

  useEffect(() => {
    if (isSuccess) {
      window.location.href = '/';
    }
  }, [isSuccess]);

  const handleSubmit = (credentials: Credentials) => {
    mutate(credentials);
  };

  return (
    <AuthView className='login-view'>
      <Flex direction='column'>
        <Compass size='XXL' alignSelf={'center'} marginBottom={'size-400'} />
        <Heading level={1} alignSelf='self-start'>
          Log-in
        </Heading>
        <LoginForm inProgress={isPending} onSubmit={handleSubmit} />
        <Divider size='S' marginTop={'size-400'} marginBottom={'size-200'} />
        <Link href={forgotHref} variant='secondary' isQuiet>
          Forgot password?
        </Link>
        <Link href={resetHref} isQuiet variant='secondary'>
          Don't have an account? Sign-up now!
        </Link>
      </Flex>
    </AuthView>
  );
}
