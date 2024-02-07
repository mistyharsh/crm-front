import { Route } from '@tanstack/react-router';
import { View, Flex, Heading, Divider, Link } from '@adobe/react-spectrum';
import Compass from '@spectrum-icons/workflow/Compass';

import { ForgotForm } from './ForgotForm';

import { rootRoute } from '../../Root';

export const forgetRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/forget-password',
  component: Forget,
});

export function Forget() {
  return (
    <View
      data-cl='forget-view'
      backgroundColor={'gray-75'}
      padding={'size-400'}
      width={'size-5000'}
      margin={'auto'}
      marginTop={'size-400'}
      borderColor={'gray-200'}
      borderWidth={'thin'}
    >
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
    </View>
  );
}
