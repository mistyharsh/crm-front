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
      <Stack miw={'260px'} gap={'lg'}>
        <TextInput
          label='Email'
          name='email'
          type='text'
          placeholder='Enter your email address'
          value={userEmail.email}
          onChange={(ev) =>
            setUserEmail({ ...userEmail, email: ev.target.value })
          }
        />
        <Button
          type='submit'
          variant='filled'
          fullWidth
          loading={inProgress}
          children='Request reset link'
        />
      </Stack>
    </form>
  );
}
