import { Button, Stack, TextInput } from '@mantine/core';
import { useState, type FormEvent } from 'react';

export type Credentials = {
  email: string;
  password: string;
};

export type LoginFormProps = {
  inProgress: boolean;
  onSubmit: (value: Credentials) => void;
};

export function LoginForm(props: LoginFormProps) {
  const { inProgress, onSubmit } = props;

  const [credentials, setCredentials] = useState<Credentials>({
    email: '',
    password: '',
  });

  const handleChange = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(credentials);
  };

  return (
    <form className='LoginForm' onSubmit={handleChange}>
      <Stack miw={'260px'} gap={'lg'}>
        <TextInput
          label='Email'
          type='email'
          placeholder='Enter your email address'
          value={credentials.email}
          onChange={(ev) =>
            setCredentials({ ...credentials, email: ev.target.value })
          }
        />
        <TextInput
          label='Password'
          type='password'
          placeholder='Enter your password'
          value={credentials.password}
          onChange={(ev) =>
            setCredentials({ ...credentials, password: ev.target.value })
          }
        />

        <Button
          type='submit'
          variant='filled'
          fullWidth
          loading={inProgress}
          children='Login'
        />
      </Stack>
    </form>
  );
}
