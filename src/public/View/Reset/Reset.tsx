import { Divider, Stack, Title } from '@mantine/core';
import { useMutation, useQuery } from '@tanstack/react-query';
import { createRoute, useLinkProps, useNavigate } from '@tanstack/react-router';
import { TicketCheck } from 'lucide-react';
import { useEffect } from 'react';

import { execute } from '#api/Client.js';
import { AuthView } from '../../Component/AuthView.js';
import { ButtonAsLink } from '../../Link.js';
import { rootRoute } from '../../RootRoute.js';
import { loginRoute } from '../Login/Login.js';
import { ResetForm, type ResetCredentials } from './ResetForm.js';
import {
  FailedResetPassword,
  SuccessfulReset,
  InvalidResetToken,
} from './ResetStatus.js';

export const resetRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/reset-password/$resetToken',
  component: Reset,
});

function useResetPassword() {
  return useMutation({
    mutationFn: (credentials: ResetCredentials) =>
      execute('ResetPassword', {
        token: credentials.token,
        newPassword: credentials.password,
      }),
  });
}

function useTokenInfo(token: string) {
  return useQuery({
    queryKey: ['reset', token],
    queryFn: () => execute('GetResetTokenInfo', { token }),
  });
}

export function Reset() {
  const { resetToken } = resetRoute.useParams();
  const info = useTokenInfo(resetToken);
  const reset = useResetPassword();
  const loginHref = useLinkProps({ to: loginRoute.to }).href;
  const navigate = useNavigate();

  useEffect(() => {
    if (reset.isSuccess && navigate) {
      const timeout = setTimeout(() => {
        navigate({ to: loginHref, replace: true });
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [reset.isSuccess]);

  const handleSubmit = (credentials: ResetCredentials) => {
    reset.mutate(credentials);
  };

  const render = () => {
    if (info.isLoading) {
      return <Title order={2}>Loading....</Title>;
    } else if (info.isError) {
      return <InvalidResetToken />;
    } else if (reset.isSuccess) {
      return <SuccessfulReset />;
    } else if (reset.isError) {
      return <FailedResetPassword />;
    }

    return (
      <ResetForm
        token={resetToken}
        inProgress={reset.isPending}
        onSubmit={handleSubmit}
      />
    );
  };

  return (
    <AuthView className='reset-view'>
      <Stack gap={'md'}>
        <TicketCheck
          size={'3rem'}
        />
        <Title order={1}>
          Reset Password
        </Title>
        {render()}
        <Divider />
        <ButtonAsLink to='/login' variant='subtle'>
          Back to login
        </ButtonAsLink>
      </Stack>
    </AuthView>
  );
}
