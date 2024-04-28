import { Divider, Flex, Heading, Link } from '@adobe/react-spectrum';
import SuccessMetric from '@spectrum-icons/workflow/SuccessMetric';
import { useMutation, useQuery } from '@tanstack/react-query';
import { createRoute, useLinkProps, useNavigate } from '@tanstack/react-router';
import ky from 'ky';
import { useEffect } from 'react';

import { client, graphql } from '../../../graphql';
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
const resetPasswordMutation = graphql(`
  mutation ResetPasswordMutation($token: String!, $newPassword: String!) {
    resetPassword(resetToken: $token, newPassword: $newPassword)
  }
`);

function resetPassword(credentials: ResetCredentials) {
  return client.request({
    document: resetPasswordMutation,
    variables: {
      token: credentials.token,
      newPassword: credentials.password,
    },
  });
}

function useResetPassword() {
  return useMutation({
    mutationFn: resetPassword,
  });
}

const resetPasswordQuery = graphql(`
  query ResetPasswordQuery($token: String!) {
    getResetToken(resetToken: $token) {
      id
      userId
    }
  }
`);

function getTokenInfo(resetToken: string) {
  return client.request({
    document: resetPasswordQuery,
    variables: {
      token: resetToken,
    },
  });
}

function useTokenInfo(token: string) {
  return useQuery({
    queryKey: ['reset', token],
    queryFn: () => getTokenInfo(token),
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
