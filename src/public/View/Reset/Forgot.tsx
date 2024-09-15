import { Divider, Stack, Title } from '@mantine/core';
import { useMutation } from '@tanstack/react-query';
import { createRoute } from '@tanstack/react-router';
import { LogIn } from 'lucide-react';

import { execute } from '#api/Client.js';
import { AuthView } from '../../Component/AuthView.js';
import { ButtonAsLink } from '../../Link.js';
import { rootRoute } from '../../RootRoute.js';
import { ForgotForm, type Credentials } from './ForgotForm.js';
import { EmailSent } from './ResetStatus.js';

export const forgotRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/forgot-password',
  component: Forgot,
});

export function Forgot() {
  const { isPending, isSuccess, mutate } = useMutation({
    mutationFn: (userName: string) => execute('ForgotPassword', { userName }),
  });

  const handleChange = (credentials: Credentials) => {
    mutate(credentials.email);
  };

  return (
    <AuthView className='forgot-view'>
      <Stack gap={'md'}>
        <LogIn size={'3rem'} />
        <Title order={1}>
          Forgot Password?
        </Title>
        {isSuccess ? (
          <EmailSent />
        ) : (
          <ForgotForm inProgress={isPending} onSubmit={handleChange} />
        )}
        <Divider />
        <ButtonAsLink to='/login' variant='subtle'>
          Back to Login
        </ButtonAsLink>
      </Stack>
    </AuthView>
  );
}
