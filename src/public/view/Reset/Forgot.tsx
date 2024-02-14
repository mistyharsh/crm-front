import { View, Flex, Heading, Divider, Link } from '@adobe/react-spectrum';
import Compass from '@spectrum-icons/workflow/Compass';
import { useMutation } from '@tanstack/react-query';
import { createRoute } from '@tanstack/react-router';

import Ky from 'ky';

import { AuthView } from '../../component/AuthView';
import { rootRoute } from '../../Root';
import { ForgotForm, type Credentials } from './ForgotForm';
import { useEffect } from 'react';

export const forgotRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/forget-password',
  component: Forgot,
});

async function forgot(credentials: Credentials): Promise<any> {
  const response = await Ky.post('/auth/forgot-password', {
    json: {
      username: credentials.email,
    },
  }).json();

  return response;
}

export function Forgot() {
  const { isPending, isError, isSuccess, mutate } = useMutation({
    mutationFn: forgot,
  });

  useEffect(() => {
    if (isSuccess) {
      window.location.href = '/';
    }
  }, [isSuccess]);

  const handleChange = (credentials: Credentials) => {
    mutate(credentials);
  };

  return (
    <AuthView className='forgot-view'>
      <Flex direction='column'>
        <Compass size='XXL' alignSelf={'center'} marginBottom={'size-400'} />
        <Heading level={1} alignSelf='self-start'>
          Forgot Password
        </Heading>
        <ForgotForm inProgress={isPending} onChange={handleChange} />
        <Divider size='S' marginTop={'size-400'} marginBottom={'size-200'} />
        <Link href='/login' isQuiet variant='secondary'>
          Back to Login
        </Link>
      </Flex>
    </AuthView>
  );
}
