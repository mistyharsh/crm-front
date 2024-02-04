import {
  Form,
  TextField,
  Button,
} from '@adobe/react-spectrum';
import { useState, type FormEvent } from 'react';

export type Credentials = {
  email: string;
  password: string;
};

export type LoginFormProps = {
  onChange: (value: Credentials) => void;
};


export function LoginForm(props: LoginFormProps) {
  const { onChange } = props;

  const [credentials, setCredentials] = useState<Credentials>({
    email: '',
    password: '',
  });

  const handleChange = (e: FormEvent) => {
    // e.preventDefault();
  }

  return (
    <Form
      necessityIndicator='icon'
      validationBehavior='native'
      onSubmit={handleChange}>
      <TextField
        label='Email'
        name='email'
        type='email'
        isRequired
        description='Your email id'
        value={credentials.email}
        onChange={(email) => setCredentials({ ...credentials, email })}
      />
      <TextField
        label='Password'
        name='password'
        type='password'
        isRequired
        description='Password'
        value={credentials.password}
        onChange={(email) => setCredentials({ ...credentials, email })}
      />

      <Button
        type='submit'
        variant='primary'
        width='single-line-width'
        style='fill'
        // staticColor='black'
        alignSelf={'center'}
      >
        Login
      </Button>

    </Form>
  );
}
