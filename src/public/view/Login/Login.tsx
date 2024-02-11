import { Divider, Flex, Heading, Link, View } from '@adobe/react-spectrum';
import Compass from '@spectrum-icons/workflow/Compass';
import { useMutation } from '@tanstack/react-query';
import { createRoute } from '@tanstack/react-router';
import ky from 'ky';
import { useEffect } from 'react';

import { AuthView } from '../../component/AuthView';
import { rootRoute } from '../../Root';
import { LoginForm, type Credentials } from './LoginForm';

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
  const { isPending, isError, isSuccess, mutate } = useMutation({
    mutationFn: login,
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
        <Link href='public/forget-password/' variant='secondary' isQuiet>
          Forget password?
        </Link>
        <Link href='/reset-password/$resetToken' isQuiet variant='secondary'>
          Don't have an account? Sign-up
        </Link>
      </Flex>
    </AuthView>
  );
}
