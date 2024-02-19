import { Heading } from '@adobe/react-spectrum';
import AlertCircleFilled from '@spectrum-icons/workflow/AlertCircleFilled';

export function EmailSent() {
  return (
    <Heading level={4} alignSelf={'center'}>
      Link to reset your password has been sent to you email. Please check.
    </Heading>
  );
}

export function ResetPasswordSuccessfull() {
  return (
    <Heading level={4} alignSelf={'center'}>
      The password has been set successfully
    </Heading>
  );
}

export function ResetPasswordFailed() {
  return (
    <Heading level={1} alignSelf={'center'}>
      404
      <AlertCircleFilled />
      <Heading level={4}>Reset password link not found</Heading>
    </Heading>
  );
}
