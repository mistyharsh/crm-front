import { Flex, Heading, Divider, Link } from '@adobe/react-spectrum';
import Login from '@spectrum-icons/workflow/Login';
import { useMutation } from '@tanstack/react-query';
import { createRoute, useLinkProps } from '@tanstack/react-router';

import { client, graphql } from '#shared/graphql.js';
import { AuthView } from '../../Component/AuthView.js';
import { rootRoute } from '../../RootRoute.js';
import { loginRoute } from '../Login/Login.js';
import { EmailSent } from './ResetStatus.js';
import { ForgotForm, type Credentials } from './ForgotForm.js';

export const forgotRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/forgot-password',
  component: Forgot,
});

const forgotPasswordMutation = graphql(`
  mutation ForgotPasswordMutatuin($userName: String!) {
    forgotPassword(userName: $userName)
  }
`);

function forgotPassword(credentials: Credentials) {
  return client.request({
    document: forgotPasswordMutation,
    variables: {
      userName: credentials.email,
    },
  });
}

export function Forgot() {
  const { isPending, isSuccess, mutate } = useMutation({
    mutationFn: forgotPassword,
  });

  const handleChange = (userEmail: Credentials) => {
    mutate(userEmail);
  };

  const loginHref = useLinkProps({ to: loginRoute.to }).href;

  return (
    <AuthView className='forgot-view'>
      <Flex direction='column'>
        <Login size='XXL' alignSelf={'center'} marginBottom={'size-400'} />
        <Heading level={1} alignSelf='self-start'>
          Forgot Password?
        </Heading>
        {isSuccess ? (
          <EmailSent />
        ) : (
          <ForgotForm inProgress={isPending} onSubmit={handleChange} />
        )}
        <Divider size='S' marginTop={'size-400'} marginBottom={'size-200'} />
        <Link href={loginHref} isQuiet variant='secondary'>
          Back to Login
        </Link>
      </Flex>
    </AuthView>
  );
}
