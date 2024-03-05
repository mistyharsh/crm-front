import {
  Button,
  Form,
  Heading,
  ProgressCircle,
  TextField,
} from '@adobe/react-spectrum';
import { useState } from 'react';

export type Credentials = {
  code: string;
  password: string;
};

export type InvitationFormProps = {
  inProgress: boolean;
  code: string;
  onSubmit: (value: Credentials) => void;
};

export function InvitationForm(props: InvitationFormProps) {
  const { inProgress, onSubmit } = props;
  const [credentials, setCredentials] = useState<Credentials>({
    code: '',
    password: '',
  });

  return (
    <Form
      necessityIndicator='icon'
      validationBehavior='native'
      onSubmit={() => console.log('inviteclaim')}
    >
      <Heading level={4}>
        Hello! TEMP to claim your invitation enter password
      </Heading>
      <TextField
        label='Password'
        name='password'
        type='password'
        isRequired
        description='Password'
        value={credentials.password}
        onChange={(password) => setCredentials({ ...credentials, password })}
      />
      <Button
        type='submit'
        variant='primary'
        width='single-line-width'
        style='fill'
        alignSelf={'center'}
      >
        {inProgress ? (
          <ProgressCircle size='S' staticColor='white' isIndeterminate />
        ) : (
          'Submit'
        )}
      </Button>
    </Form>
  );
}
