import { Divider, Flex, Heading, Link, View } from '@adobe/react-spectrum';
import Compass from '@spectrum-icons/workflow/Compass';
import { createRoute } from '@tanstack/react-router';

import { AuthView } from '../../component/AuthView';
import { rootRoute } from '../../Root';
import { ResetForm } from './ResetForm';

export const resetRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/reset-password/$resetToken',
  component: Reset,
});

export function Reset() {
  return (
    <AuthView className='reset-view'>
      <Flex direction='column'>
        <Compass size='XXL' alignSelf={'center'} marginBottom={'size-400'} />
        <Heading level={1} alignSelf='self-start'>
          Reset Password
        </Heading>
        <ResetForm onChange={(value) => console.log(value)} />
        <Divider size='S' marginTop={'size-400'} marginBottom={'size-200'} />
        <Link href='/login' isQuiet variant='secondary'>
          Back to login
        </Link>
      </Flex>
    </AuthView>
  );
}
