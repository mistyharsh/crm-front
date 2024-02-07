import { Route } from '@tanstack/react-router';

import { rootRoute } from '../../Root';
import { Divider, Flex, Heading, Link, View } from '@adobe/react-spectrum';
import Compass from '@spectrum-icons/workflow/Compass';
import { ResetForm } from './ResetForm';

export const resetRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/reset-password/$resetToken',
  component: Reset,
});

export function Reset() {
  return (
    <View
      data-cl='reset-view'
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
          Reset Password
        </Heading>
        <ResetForm onChange={(value) => console.log(value)} />
        <Divider size='S' marginTop={'size-400'} marginBottom={'size-200'} />
        <Link href='/login' isQuiet variant='secondary'>
          Back to login
        </Link>
      </Flex>
    </View>
  );
}
