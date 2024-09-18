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
      <Stack miw={'260px'} gap={'md'}>
        <TextInput
          label='Email'
          name='email'
          type='email'
          description='Your email id'
          value={credentials.email}
          onChange={(ev) =>
            setCredentials({ ...credentials, email: ev.target.value })
          }
        />
        <TextInput
          label='Password'
          name='password'
          type='password'
          description='Password'
          value={credentials.password}
          onChange={(ev) =>
            setCredentials({ ...credentials, password: ev.target.value })
          }
        />

        <Button
          type='submit'
          variant='filled'
          color='violet'
          fullWidth
          loading={inProgress}
          children='Login'
        />
      </Stack>
    </form>
  );
}
