import { useEffect } from 'react';
import { Divider, Flex, Heading, Link } from '@adobe/react-spectrum';
import SuccessMetric from '@spectrum-icons/workflow/SuccessMetric';
import { useMutation, useQuery } from '@tanstack/react-query';
import { createRoute } from '@tanstack/react-router';
import ky from 'ky';

import { AuthView } from '../../component/AuthView';
import { rootRoute } from '../../Root';
import { useHref } from '../../../util/location';
import { loginRoute } from '../Login/Login';
import { ResetForm, type ResetCredentials } from './ResetForm';
import {
  ResetPasswordFailed,
  ResetPasswordSuccessfull,
} from './acknowledgement';

export const resetRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/reset-password/$resetToken',
  component: Reset,
});

async function resetPassword(payload: ResetCredentials): Promise<any> {
  const response = await ky
    .post('/auth/reset-password', {
      json: payload,
    })
    .json();

  return response;
}

async function getTokenInfo(token: string): Promise<any> {
  const response = await ky.get(`/auth/reset-password/${token}`).json();
  console.log(response);

  return response;
}

function useTokenInfo(token: string) {
  return useQuery({
    queryKey: ['reset', token],
    queryFn: ({ queryKey }) => getTokenInfo(token),
  });
}

function useResetPassword() {
  return useMutation({
    mutationFn: resetPassword,
  });
}

export function Reset() {
  const { resetToken } = resetRoute.useParams();
  const info = useTokenInfo(resetToken);
  const reset = useResetPassword();
  const loginHref = useHref(loginRoute);

  useEffect(() => {
    if (reset.isSuccess) {
      window.location.href = '/login';
    }
  }, [reset.isSuccess]);

  return (
    <AuthView className='reset-view'>
      <Flex direction='column'>
        <SuccessMetric
          size='XXL'
          alignSelf={'center'}
          marginBottom={'size-400'}
        />
        <Heading level={1} alignSelf='self-start'>
          Reset Password
        </Heading>
        {info.isPending ? (
          <ResetForm
            token={resetToken}
            inProgress={reset.isPending}
            onSubmit={reset.mutate}
          />
        ) : info.isSuccess ? (
          <ResetPasswordSuccessfull />
        ) : (
          <ResetPasswordFailed />
        )}
        <Divider size='S' marginTop={'size-400'} marginBottom={'size-200'} />
        <Link href={loginHref} isQuiet variant='secondary'>
          Back to login
        </Link>
      </Flex>
    </AuthView>
  );
}
