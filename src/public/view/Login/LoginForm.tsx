import { Form, TextField, Button, ProgressCircle } from '@adobe/react-spectrum';
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
    <Form
      necessityIndicator='icon'
      validationBehavior='native'
      onSubmit={handleChange}
    >
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
        onChange={(password) => setCredentials({ ...credentials, password })}
      />

      <Button
        type='submit'
        variant='accent'
        width='single-line-width'
        style='fill'
        alignSelf={'center'}
      >
        {inProgress ? (
          <ProgressCircle size='S' staticColor='white' isIndeterminate />
        ) : (
          'Login'
        )}
      </Button>
    </Form>
  );
}
