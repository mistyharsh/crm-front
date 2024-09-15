import { Stack, Title } from '@mantine/core';
import { CircleAlert } from 'lucide-react';

export function EmailSent() {
  return (
    <Title order={4}>
      Link to reset your password has been sent to you email. Please check.
    </Title>
  );
}

export function SuccessfulReset() {
  return (
    <Title order={4}>
      The password has been set successfully
    </Title>
  );
}

export function InvalidResetToken() {
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

export function FailedResetPassword() {
  return (
    <Stack gap={'md'}>
      <Title order={1}>
        <CircleAlert />
        Failed to reset the password! Try again.
      </Title>
    </Stack>
  );
}
