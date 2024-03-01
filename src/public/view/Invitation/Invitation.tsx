import { Divider, Flex, Heading, Link } from '@adobe/react-spectrum';
import Engagement from '@spectrum-icons/workflow/Engagement';
import { useMutation, useQuery } from '@tanstack/react-query';
import { createRoute } from '@tanstack/react-router';
import ky from 'ky';

import { useHref } from '../../../util/location';
import { AuthView } from '../../component/AuthView';
import { rootRoute } from '../../Root';
import { loginRoute } from '../Login/Login';
import { Credentials, InvitationForm } from './InvitationForm';

export const invitationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/invitation/$code',
  component: ClaimInvitation,
});

async function invitation(credentials: Credentials): Promise<any> {
  const response = await ky
    .post('/auth/invitation', {
      json: {},
    })
    .json();

  return response;
}
async function getCodeInfo(code: string): Promise<any> {
  const response = await ky.get(`/auth/reset-password/${code}`).json();

  return response;
}

function useCodeInfo(code: string) {
  return useQuery({
    queryKey: ['reset', code],
    queryFn: ({ queryKey }) => getCodeInfo(code),
  });
}

function useInvitationInfo() {
  return useMutation({
    mutationFn: invitation,
  });
}

export function ClaimInvitation() {
  const { code } = invitationRoute.useParams();
  const info = useCodeInfo(code);
  const claimInfo = useInvitationInfo();
  const loginHref = useHref(loginRoute);

  return (
    <AuthView className='claim-invitation-view'>
      <Flex direction='column'>
        <Engagement size='XXL' alignSelf={'center'} marginBottom={'size-400'} />
        <Heading level={1} alignSelf='self-start'>
          Claim Invitation
        </Heading>
        <InvitationForm
          code={code}
          inProgress={claimInfo.isPending}
          onSubmit={claimInfo.mutate}
        />
        <Divider size='S' marginTop={'size-400'} marginBottom={'size-200'} />
        <Link href={loginHref} isQuiet variant='secondary'>
          Back to log-in
        </Link>
      </Flex>
    </AuthView>
  );
}
