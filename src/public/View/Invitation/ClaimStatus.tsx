import { Heading, View } from '@adobe/react-spectrum';
import AlertCircleFilled from '@spectrum-icons/workflow/AlertCircleFilled';

export function SuccessfulInvitationClaim() {
  return (
    <Heading level={2} alignSelf={'center'}>
      The Invitation has been claimed!!
    </Heading>
  );
}

export function FailedInvitationClaim() {
  return (
    <Heading level={2} alignSelf={'center'}>
      Failed to claim the Invitation!!!!
    </Heading>
  );
}

export function InvalidInvitation() {
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
