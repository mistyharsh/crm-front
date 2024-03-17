import { Divider, Flex, Heading, Link } from '@adobe/react-spectrum';
import Compass from '@spectrum-icons/workflow/Compass';
import { useMutation } from '@tanstack/react-query';
import { createRoute, getRouteApi, useLinkProps } from '@tanstack/react-router';
import ky from 'ky';
import { useEffect } from 'react';

import { AuthView } from '../../component/AuthView';
import { publicRoute } from '../../publicRoute';
import { forgotRoute } from '../Reset/Forgot';
import { resetRoute } from '../Reset/Reset';
import { LoginForm, type Credentials } from './LoginForm';

export const loginRoute = createRoute({
  getParentRoute: () => publicRoute,
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
  const { isPending, isError, isSuccess, mutate } = useMutation({ mutationFn: login });
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
