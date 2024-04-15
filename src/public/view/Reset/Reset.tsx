import { Divider, Flex, Heading, Link } from '@adobe/react-spectrum';
import SuccessMetric from '@spectrum-icons/workflow/SuccessMetric';
import { useMutation, useQuery } from '@tanstack/react-query';
import { createRoute, useLinkProps, useNavigate } from '@tanstack/react-router';
import ky from 'ky';
import { useEffect } from 'react';

import { AuthView } from '../../component/AuthView';
import { publicRoute } from '../../publicRoute';
import { loginRoute } from '../Login/Login';
import { ResetForm, type ResetCredentials } from './ResetForm';
import {
  FailedResetPassword,
  SuccessfulReset,
  InvalidResetToken,
} from './ResetStatus';

export const resetRoute = createRoute({
  getParentRoute: () => publicRoute,
  path: '/reset-password/$resetToken',
  component: Reset,
});

// TODO: Types
async function resetPassword(payload: ResetCredentials): Promise<any> {
  const response = await ky
    .post('/auth/reset-password', {
      json: {
        token: payload.token,
        newPassword: payload.password,
      },
    })
    .json();

  return response;
}

async function getTokenInfo(token: string) {
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
  const navigate = useNavigate();

  useEffect(() => {
    if (reset.isSuccess && navigate) {
      const timeout = setTimeout(() => {
        console.log('dsaf');
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
      return <Heading level={2}>Loading....</Heading>;
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
