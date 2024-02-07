import { Button, Form, TextField } from '@adobe/react-spectrum';

import { FormEvent, useState } from 'react';

export type Credentials = {
  email: string;
};

export type ForgotFormProps = {
  onChange: (value: Credentials) => void;
};

export function ForgotForm(props: ForgotFormProps) {
  const { onChange } = props;
  const [credentials, setCredentials] = useState<Credentials>({
    email: '',
  });

  const handleChange = (e: FormEvent) => {
    // e.preventDefault();
  };
  return (
    <Form
      necessityIndicator='icon'
      validationBehavior='native'
      onSubmit={handleChange}
    >
      <TextField
        label='Enter email id'
        name='email'
        type='text'
        isRequired
        description='Your email id'
        value={credentials.email}
        onChange={(email) => setCredentials({ ...credentials, email })}
      />
      <Button
        type='submit'
        variant='primary'
        width='single-line-width'
        style='fill'
        alignSelf={'center'}
      >
        Submit
      </Button>
    </Form>
  );
}
