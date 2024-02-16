import { useEffect } from 'react';
import { Divider, Flex, Heading, Link, View } from '@adobe/react-spectrum';
import SuccessMetric from '@spectrum-icons/workflow/SuccessMetric';
import { useMutation } from '@tanstack/react-query';
import { createRoute } from '@tanstack/react-router';

import Ky from 'ky';

import { AuthView } from '../../component/AuthView';
import { rootRoute } from '../../Root';
import { ResetForm, type Credentials } from './ResetForm';

export const resetRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/reset-password/$resetToken',
  component: Reset,
});

async function reset(userPassword: Credentials): Promise<any> {
  const response = await Ky.post('/auth/forgot-password', {
    json: {
      password: userPassword.password,
    },
  }).json();

  return response;
}

export function Reset() {
  const { isPending, isError, isSuccess, mutate } = useMutation({
    mutationFn: reset,
  });

  useEffect(() => {
    if (isSuccess) {
      window.location.href = '/login';
    }
  }, [isSuccess]);

  const handleChange = (userPassword: Credentials) => {
    mutate(userPassword);
  };

  const token = resetRoute.useParams();

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
        <ResetForm inProgress={isPending} onSubmit={handleChange} />
        <Divider size='S' marginTop={'size-400'} marginBottom={'size-200'} />
        <Link href='/login' isQuiet variant='secondary'>
          Back to login
        </Link>
      </Flex>
    </AuthView>
  );
}
