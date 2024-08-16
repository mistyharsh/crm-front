import { Divider, Flex, Heading, Link } from '@adobe/react-spectrum';
import Engagement from '@spectrum-icons/workflow/Engagement';
import { useMutation, useQuery } from '@tanstack/react-query';
import { createRoute, useLinkProps, useNavigate } from '@tanstack/react-router';

import { useEffect } from 'react';

import { execute } from '#api/Client.js';
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

function useInvitation(code: string) {
  return useQuery({
    queryKey: ['claim', code],
    queryFn: () => execute('Invitation', { code }),
  });
}

function useClaim() {
  return useMutation({
    mutationFn:  (credentials: Credentials) => execute('Claim', credentials),
  });
}

export function ClaimInvitation() {
  const { code } = invitationRoute.useParams();
  const loginHref = useLinkProps({ to: loginRoute.to }).href;

  const info = useInvitation(code);
  const claim = useClaim();
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
