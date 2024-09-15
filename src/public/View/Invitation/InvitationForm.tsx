import { Button, Stack, TextInput, Title } from '@mantine/core';
import { type FormEvent, useState } from 'react';

export type Credentials = {
  code: string;
  password: string;
};

export type InvitationFormProps = {
  code: string;
  name: string;
  onSubmit: (value: Credentials) => void;
};

export function InvitationForm(props: InvitationFormProps) {
  const { code, onSubmit, name: fullName } = props;
  const [password, setPassword] = useState('');

  const handleChange = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ code, password });
  };

  return (
    <form onSubmit={handleChange}>
      <Stack>
        <Title order={3}>Hello {fullName}!!</Title>
        <Title order={4}>To claim your invitation enter password</Title>
        <TextInput
          label='Password'
          name='password'
          type='password'
          description='Password'
          value={password}
          onChange={(ev) => setPassword(ev.currentTarget.value)}
        />
        <Button
          type='submit'
          variant='primary'
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
}
