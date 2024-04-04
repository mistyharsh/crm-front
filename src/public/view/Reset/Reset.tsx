import { Divider, Flex, Heading, Link } from '@adobe/react-spectrum';
import SuccessMetric from '@spectrum-icons/workflow/SuccessMetric';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  createRoute,
  useLinkProps,
  useNavigate,
  useParams,
} from '@tanstack/react-router';
import ky from 'ky';
import { useEffect } from 'react';

import {
  ResetPasswordSuccessful,
  ResetTokenInvalid,
} from '../../component/Acknowledgement';
import { AuthView } from '../../component/AuthView';
import { publicRoute } from '../../publicRoute';
import { loginRoute } from '../Login/Login';
import { ResetForm, type ResetCredentials } from './ResetForm';

export const resetRoute = createRoute({
  getParentRoute: () => publicRoute,
  path: '/reset-password/$resetToken',
  component: Reset,
});

async function resetPassword(payload: ResetCredentials): Promise<any> {
  console.log('reset pass0wd');

  const response = await ky
    .post('/auth/reset-password', {
      json: payload,
    })
    .json();

  console.log('REspoens:- ', response);

  return response;
}

async function getTokenInfo(token: string): Promise<any> {
  const response = await ky.get(`/auth/reset-password/${token}`).json();

  return response;
}

function useTokenInfo(token: string) {
  return useQuery({
    queryKey: ['reset', token],
    queryFn: () => getTokenInfo(token),
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
  const loginHref = useLinkProps({ to: loginRoute.to }).href;

  useEffect(() => {
    console.log('reset:- ', reset);
    if (reset.isSuccess) {
      window.location.href = '/login';
    }
  }, [reset]);

  const render = () => {
    if (info.isLoading) {
      return <Heading level={2}>Loading....</Heading>;
    }
    if (info.isSuccess && info.data) {
      return (
        <ResetForm
          token={resetToken}
          inProgress={reset.isPending}
          onSubmit={reset.mutate}
        />
      );
    } else if (info.isError || !info.data) {
      return <ResetTokenInvalid />;
    } else if (reset.isSuccess) {
      return <ResetPasswordSuccessful />;
    } else if (reset.isError) {
      // TODO: Add error handling later.
      return null;
    }

    return null;
  };

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
        {render()}
        <Divider size='S' marginTop={'size-400'} marginBottom={'size-200'} />
        <Link href={loginHref} isQuiet variant='secondary'>
          Back to login
        </Link>
      </Flex>
    </AuthView>
  );
}
