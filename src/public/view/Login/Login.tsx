import { Divider, Flex, Heading, Link, View } from '@adobe/react-spectrum';
import Compass from '@spectrum-icons/workflow/Compass';
import { Route } from '@tanstack/react-router';

import { rootRoute } from '../../Root';
import { LoginForm } from './LoginForm';

export const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login,
});

export function Login() {

  // TODO: React query integration.
  // https://tanstack.com/query/latest

  return (
    <View
      data-cl='login-view'
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
          Log-in
        </Heading>
        <LoginForm
          onChange={(value) => console.log(value)}
        />
        <Divider
          size='S'
          marginTop={'size-400'}
          marginBottom={'size-200'}/>
        <Link
          href='public/forget-password/'
          variant='secondary'
          isQuiet
        >
          Forget password?
        </Link>
        <Link href='/reset-password/$resetToken' isQuiet variant='secondary'>
          Don't have an account? Sign-up
        </Link>
      </Flex>
    </View>
  );
}
