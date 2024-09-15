import { Button, Group, Stack, TextInput } from '@mantine/core';
import { Eye, EyeOff } from 'lucide-react';
import { type FormEvent, useState } from 'react';

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

  const handleSubmit = (e: FormEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onSubmit({ token, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={'md'}>
        <Group gap={'sm'} align='end'>
          <TextInput
            label='New Password'
            name='newPassword'
            type={showPassword ? 'text' : 'password'}
            description='Your new password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
          </Button>
        </Group>
        <Button
          type='submit'
          variant='filled'
          color='gray'
          fullWidth
          loading={inProgress}
          children='Submit'
        />
      </Stack>
    </form>
  );
}
