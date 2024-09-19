import { Divider, Group, Stack, Title } from '@mantine/core';
import { useMutation } from '@tanstack/react-query';
import { createRoute } from '@tanstack/react-router';
import ky from 'ky';
import { FlameKindling } from 'lucide-react';
import { useEffect } from 'react';

import { AuthView } from '../../Component/AuthView.js';
import { ButtonAsLink } from '../../Link.js';
import { rootRoute } from '../../RootRoute.js';
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
      <Stack gap={'lg'}>
        <Group mb={'lg'}>
          <FlameKindling size={'3rem'} />
        </Group>

        <Title order={1}>Log-in</Title>

        <LoginForm inProgress={isPending} onSubmit={handleSubmit} />
        <Divider />

        <ButtonAsLink to='/forgot-password' variant='subtle'>
          Forgot password?
        </ButtonAsLink>
      </Stack>
    </AuthView>
  );
}
