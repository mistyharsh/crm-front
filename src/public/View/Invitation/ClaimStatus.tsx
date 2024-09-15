import { Stack, Title } from '@mantine/core';
import { CircleAlert } from 'lucide-react';

export function SuccessfulInvitationClaim() {
  return (
    <Title order={2}>
      The Invitation has been claimed!!
    </Title>
  );
}

export function FailedInvitationClaim() {
  return (
    <Title order={2}>
      Failed to claim the Invitation!!!!
    </Title>
  );
}

export function InvalidInvitation() {
  return (
    <Stack gap={'md'}>
      <Title order={1}>
        <CircleAlert />
        404
      </Title>
      <Title order={4}>Reset password link not found</Title>
    </Stack>
  );
}
