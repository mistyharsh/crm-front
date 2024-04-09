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
  ResetPasswordFailed,
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
    if (reset.isSuccess) {
      setTimeout(() => {
        window.location.href = '/public/login';
      }, 3000);
    }
  }, [reset.isSuccess]);

  const handleSubmit = (credentials: ResetCredentials) => {
    reset.mutate(credentials);
  };

  const render = () => {
    console.log(reset);
    //If the info is still loading
    if (info.isLoading) {
      return <Heading level={2}>Loading....</Heading>;
    }

    //If the token is invalid
    else if (info.isError) {
      return <ResetTokenInvalid />;
    }

    //If token is valid
    else if (info.isSuccess) {
      //If reseting password successful
      if (reset.isSuccess) {
        return <ResetPasswordSuccessful />;
      }
      //If failed to reset password
      else if (reset.isError) {
        return <ResetPasswordFailed />;
      }
      //Else
      else {
        return (
          <ResetForm
            token={resetToken}
            inProgress={reset.isPending}
            onSubmit={handleSubmit}
          />
        );
      }
    } else return null;
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
