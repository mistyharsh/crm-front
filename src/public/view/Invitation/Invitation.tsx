import { Divider, Flex, Heading, Link } from '@adobe/react-spectrum';
import Engagement from '@spectrum-icons/workflow/Engagement';
import { useMutation, useQuery } from '@tanstack/react-query';
import { createRoute, useLinkProps } from '@tanstack/react-router';
import ky from 'ky';

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

const claimMutation = graphql(`
  mutation CLaimMutatioin($code: String!, $password: String!) {
    claimInvitation(inviteCode: $code, password: $password)
  }
`);

function claimInvitation(invitationCredentials: InvitationCredentials) {
  return client.request({
    document: claimMutation,
    variables: {
      code: invitationCredentials.code,
      password: invitationCredentials.password,
    },
  });
}

function useClaimInvitation() {
  return useMutation({
    mutationFn: (invitationCredentials: InvitationCredentials) => {
      return claimInvitation(invitationCredentials);
    },
  });
}

export function ClaimInvitation() {
  const { code } = invitationRoute.useParams();
  const info = useGetCodeInfo(code);
  const loginHref = useLinkProps({ to: loginRoute.to }).href;
  const claim = useClaimInvitation();

  const handleSubmit = (credentials: InvitationCredentials) => {
    claim.mutate(credentials);
  };

  const render = () => {
    //If the info is being retrieved
    if (info.isLoading) {
      return <Heading level={2}>Loading....</Heading>;
    } else if (info.isError || !info.data) {
      return <ClaimInvitationInvalid />;
    } else if (info.isSuccess && info.data) {
      //If claim failed
      if (claim.isError) {
        return <ClaimInvitationFailed />;
      }

      //If claim succeeded
      else if (claim.isSuccess) {
        return <ClaimInvitationSuccessful />;
      }

      //If claiming is still pending
      else {
        const fullName =
          `${info.data.firstName} ${info.data.lastName}`.toUpperCase();
        return (
          <InvitationForm
            code={code}
            fullName={fullName}
            onSubmit={handleSubmit}
          />
        );
      }
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
