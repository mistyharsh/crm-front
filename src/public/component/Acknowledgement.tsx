import { Heading, View } from '@adobe/react-spectrum';
import AlertCircleFilled from '@spectrum-icons/workflow/AlertCircleFilled';

export function EmailSent() {
  return (
    <Heading level={4} alignSelf={'center'}>
      Link to reset your password has been sent to you email. Please check.
    </Heading>
  );
}

export function ResetPasswordSuccessful() {
  return (
    <Heading level={4} alignSelf={'center'}>
      The password has been set successfully
    </Heading>
  );
}

export function ResetTokenInvalid() {
  return (
    <View>
      <Heading level={1} alignSelf={'center'}>
        <AlertCircleFilled />
        404
      </Heading>
      <Heading level={4}>Reset password link not found</Heading>
    </View>
  );
}

export function ClaimInvitationSuccessful() {
  return (
    <Heading level={2} alignSelf={'center'}>
      The Invitation has been claimed!!
    </Heading>
  );
}

export function ClaimInvitationFailed() {
  return (
    <Heading level={2} alignSelf={'center'}>
      Failed to claim the Invitation!!!!
    </Heading>
  );
}

export function ClaimInvitationInvalid() {
  return (
    <View>
      <Heading level={1} alignSelf={'center'}>
        <AlertCircleFilled />
        404
      </Heading>
      <Heading level={4}>Reset password link not found</Heading>
    </View>
  );
}
