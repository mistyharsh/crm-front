import { View, Flex, Heading, Divider, Link } from '@adobe/react-spectrum';
import Compass from '@spectrum-icons/workflow/Compass';
import { createRoute } from '@tanstack/react-router';

import { AuthView } from '../../component/AuthView';
import { rootRoute } from '../../Root';
import { ForgotForm } from './ForgotForm';

export const forgotRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/forget-password',
  component: Forgot,
});

export function Forgot() {
  return (
    <AuthView className='forgot-view'>
      <Flex direction='column'>
        <Compass size='XXL' alignSelf={'center'} marginBottom={'size-400'} />
        <Heading level={1} alignSelf='self-start'>
          Forgot Password
        </Heading>
        <ForgotForm onChange={(value) => console.log(value)} />
        <Divider size='S' marginTop={'size-400'} marginBottom={'size-200'} />
        <Link href='/login' isQuiet variant='secondary'>
          Back to Login
        </Link>
      </Flex>
    </AuthView>
  );
}
