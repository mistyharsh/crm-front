import {
  ActionButton,
  Button,
  Flex,
  Form,
  TextField,
  ProgressCircle,
} from '@adobe/react-spectrum';
import Visiblity from '@spectrum-icons/workflow/Visibility';
import VisiblityOff from '@spectrum-icons/workflow/VisibilityOff';

import { FormEvent, useState } from 'react';

export type ResetCredentials = {
  token: string;
  password: string;
};

export type ResetFormProps = {
  inProgress: boolean;
  token: string;
  onSubmit: (value: ResetCredentials) => void;
};

export function ResetForm(props: ResetFormProps) {
  const { inProgress, token, onSubmit } = props;

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: FormEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onSubmit({ token, password });
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
          value={password}
          onChange={setPassword}
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
        {inProgress ? (
          <ProgressCircle size='S' staticColor='white' isIndeterminate />
        ) : (
          'Submit'
        )}
      </Button>
    </Form>
  );
}
