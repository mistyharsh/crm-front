import { Divider, Flex, Heading, Link } from '@adobe/react-spectrum';
import Engagement from '@spectrum-icons/workflow/Engagement';
import { useQuery } from '@tanstack/react-query';
import { createRoute, useLinkProps } from '@tanstack/react-router';
import ky from 'ky';

import { useState } from 'react';

import { client, graphql } from '../../../graphql';
import {
  ClaimInvitationFailed,
  ClaimInvitationInvalid,
  ClaimInvitationSuccessful,
} from '../../component/Acknowledgement';
import { AuthView } from '../../component/AuthView';
import { publicRoute } from '../../publicRoute';
import { loginRoute } from '../Login/Login';
import { InvitationCredentials, InvitationForm } from './InvitationForm';

export const invitationRoute = createRoute({
  getParentRoute: () => publicRoute,
  path: '/invitations/$code',
  component: ClaimInvitation,
});

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

const claimingMutation = graphql(`
  mutation CLaimMutatioin($code: String!, $password: String!) {
    claimInvitation(inviteCode: $code, password: $password)
  }
`);

function useClaimInvitation(inviteCode: string, password: string) {
  return client.request({
    document: claimingMutation,
    variables: { code: inviteCode, password: password },
  });
}

export type claimeStateType = 'claimed' | 'error' | 'pending';

export function ClaimInvitation() {
  const [claimedState, setClaimedState] = useState<claimeStateType>('pending');
  const { code } = invitationRoute.useParams();
  const info = useGetCodeInfo(code);
  const loginHref = useLinkProps({ to: loginRoute.to }).href;
  let fullName: string;

  const handleSubmit = async (credentials: InvitationCredentials) => {
    try {
      const claim = await useClaimInvitation(
        credentials.code,
        credentials.password
      );
      setClaimedState('claimed');
    } catch (error) {
      setClaimedState('error');
    }
  };

  const render = () => {
    if (claimedState === 'pending') {
      if (info.isLoading) {
        return <Heading level={2}>Loading....</Heading>;
      }
      if (info.isSuccess && info.data) {
        fullName = `${info.data.firstName} ${info.data.lastName}`.toUpperCase();
        return (
          <InvitationForm
            code={code}
            fullName={fullName}
            onSubmit={handleSubmit}
          />
        );
      } else if (info.error || !info.data) {
        return <ClaimInvitationInvalid />;
      }
    } else if (claimedState === 'error') {
      return <ClaimInvitationFailed />;
    } else {
      return <ClaimInvitationSuccessful />;
    }
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
