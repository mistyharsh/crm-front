import { Button, Stack, TextInput } from '@mantine/core';
import { type FormEvent, useState } from 'react';

export type Credentials = {
  email: string;
};

export type ForgotFormProps = {
  inProgress: boolean;
  onSubmit: (value: Credentials) => void;
};

export function ForgotForm(props: ForgotFormProps) {
  const { inProgress, onSubmit } = props;
  const [userEmail, setUserEmail] = useState<Credentials>({
    email: '',
  });

  const handleChange = (e: FormEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onSubmit(userEmail);
  };

  return (
    <form onSubmit={handleChange}>
      <Stack miw={'260px'} gap={'md'}>
        <TextInput
          label='Enter email id'
          name='email'
          type='text'
          description='Your email id'
          value={userEmail.email}
          onChange={(ev) =>
            setUserEmail({ ...userEmail, email: ev.target.value })
          }
        />
        <Button
          type='submit'
          variant='filled'
          color='gray'
          fullWidth
          loading={inProgress}
          children='Login'
        />
      </Stack>
    </form>
  );
}
