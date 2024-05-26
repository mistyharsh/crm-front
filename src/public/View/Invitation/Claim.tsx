import { Divider, Flex, Heading, Link } from '@adobe/react-spectrum';
import Engagement from '@spectrum-icons/workflow/Engagement';
import { useMutation, useQuery } from '@tanstack/react-query';
import { createRoute, useLinkProps, useNavigate } from '@tanstack/react-router';

import { useEffect } from 'react';

import { client, graphql } from '#shared/graphql.js';
import { AuthView } from '../../Component/AuthView.js';
import { rootRoute } from '../../RootRoute.js';
import { loginRoute } from '../Login/Login.js';
import {
  FailedInvitationClaim,
  InvalidInvitation,
  SuccessfulInvitationClaim,
} from './ClaimStatus.js';
import { type Credentials, InvitationForm } from './InvitationForm.js';

export const invitationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/invitations/$code',
  component: ClaimInvitation,
});

const claimInvitationQuery = graphql(`
  query ClaimQuery($code: String!) {
    getInvitation(invitationCode: $code) {
      id
      email
      firstName
      lastName
    }
  }
`);

function claimQuery(invitationCode: string) {
  return client.request({
    document: claimInvitationQuery,
    variables: {
      code: invitationCode,
    },
  });
}

function useGetCodeInfo(code: string) {
  return useQuery({
    queryKey: ['claim', code],
    queryFn: () => claimQuery(code),
  });
}

const claimMutation = graphql(`
  mutation CLaimMutatioin($code: String!, $password: String!) {
    claimInvitation(inviteCode: $code, password: $password)
  }
`);

function claimInvitation(credentials: Credentials) {
  return client.request({
    document: claimMutation,
    variables: {
      code: credentials.code,
      password: credentials.password,
    },
  });
}

function useClaimInvitation() {
  return useMutation({
    mutationFn: claimInvitation,
  });
}

export function ClaimInvitation() {
  const { code } = invitationRoute.useParams();
  const loginHref = useLinkProps({ to: loginRoute.to }).href;

  const info = useGetCodeInfo(code);
  const claim = useClaimInvitation();
  const navigate = useNavigate();

  useEffect(() => {
    if (claim.isSuccess) {
      const timeout = setTimeout(() => {
        navigate({ to: loginHref, replace: true });
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [claim.isSuccess]);

  const handleSubmit = (credentials: Credentials) => {
    claim.mutate(credentials);
  };

  const render = () => {
    // If the info is being retrieved
    if (info.isLoading) {
      return <Heading level={2}>Loading....</Heading>;
    } else if (info.isError) {
      return <InvalidInvitation />;
    } else if (claim.isError) {
      return <FailedInvitationClaim />;
    } else if (claim.isSuccess) {
      return <SuccessfulInvitationClaim />;
    } else if (info.data) {
      const firstName = info.data.getInvitation.firstName;
      const lastName = info.data.getInvitation.lastName;
      const fullName = `${firstName} ${lastName}`;

      return (
        <InvitationForm code={code} name={fullName} onSubmit={handleSubmit} />
      );
    }

    return null;
  };

  return (
    <AuthView className='claim-invitation-view'>
      <Flex direction='column'>
        <Engagement size='XXL' alignSelf={'center'} marginBottom={'size-400'} />
        <Heading level={1} alignSelf='self-start'>
          Claim Invitation
        </Heading>
        {render()}
        <Divider size='S' marginTop={'size-400'} marginBottom={'size-200'} />
        <Link href={loginHref} isQuiet variant='secondary'>
          Back to log-in
        </Link>
      </Flex>
    </AuthView>
  );
}
