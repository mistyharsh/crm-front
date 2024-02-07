import {
  ActionButton,
  Button,
  Flex,
  Form,
  TextField,
} from '@adobe/react-spectrum';
import Visiblity from '@spectrum-icons/workflow/Visibility';
import VisiblityOff from '@spectrum-icons/workflow/VisibilityOff';

import { FormEvent, useState } from 'react';

export type Credentials = {
  password: string;
};

export type ResetFormProps = {
  onChange: (value: Credentials) => void;
};

export function ResetForm(props: ResetFormProps) {
  const { onChange } = props;
  const [credentials, setCredentials] = useState<Credentials>({
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: FormEvent) => {
    // e.preventDefault();
  };
  return (
    <Form
      necessityIndicator='icon'
      validationBehavior='native'
      onSubmit={handleChange}
    >
      <Flex alignItems={'center'}>
        <TextField
          width={'size-6000'}
          label='New Password'
          name='newPassword'
          type={showPassword ? 'text' : 'password'}
          isRequired
          description='Your new password'
          value={credentials.password}
          onChange={(password) => setCredentials({ ...credentials, password })}
        />
        <ActionButton
          marginBottom={'3px'}
          onPress={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <Visiblity aria-label='XXL' size='XXL' />
          ) : (
            <VisiblityOff aria-label='XXL' size='XXL' />
          )}
        </ActionButton>
      </Flex>
      <Button
        type='reset'
        variant='primary'
        width='single-line-width'
        style='fill'
        alignSelf={'center'}
      >
        Reset Password
      </Button>
    </Form>
  );
}
