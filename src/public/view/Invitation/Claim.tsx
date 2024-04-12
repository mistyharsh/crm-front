import { Divider, Flex, Heading, Link } from '@adobe/react-spectrum';
import Engagement from '@spectrum-icons/workflow/Engagement';
import { useMutation, useQuery } from '@tanstack/react-query';
import { createRoute, useLinkProps } from '@tanstack/react-router';
import ky from 'ky';

import { client, graphql } from '../../../graphql';
import { AuthView } from '../../component/AuthView';
import { publicRoute } from '../../publicRoute';
import { loginRoute } from '../Login/Login';
import {
  FailedInvitationClaim,
  InvalidInvitation,
  SuccessfulInvitationClaim,
} from './ClaimStatus';
import { Credentials, InvitationForm } from './InvitationForm';

export const invitationRoute = createRoute({
  getParentRoute: () => publicRoute,
  path: '/invitations/$code',
  component: ClaimInvitation,
});

// TODO: Add proper type safety.
async function getCodeInfo(code: string): Promise<any> {
  const response = await ky.get(`/auth/invitations/${code}`).json();

  return response;
}

function useGetCodeInfo(code: string) {
  return useQuery({
    queryKey: ['claim', code],
    queryFn: () => getCodeInfo(code),
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
    mutationFn: (invitationCredentials: Credentials) => {
      return claimInvitation(invitationCredentials);
    },
  });
}

export function ClaimInvitation() {
  const { code } = invitationRoute.useParams();
  const loginHref = useLinkProps({ to: loginRoute.to }).href;

  const info = useGetCodeInfo(code);
  const claim = useClaimInvitation();

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
    }

    const { firstName, lastName } = info.data;
    const fullName = `${firstName} ${lastName}`;

    return (
      <InvitationForm
        code={code}
        name={fullName}
        onSubmit={handleSubmit}
      />
    );
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
