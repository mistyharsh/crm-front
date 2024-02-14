import { Button, Form, ProgressCircle, TextField } from '@adobe/react-spectrum';

import { FormEvent, useState } from 'react';

export type Credentials = {
  email: string;
};

export type ForgotFormProps = {
  inProgress: boolean;
  onChange: (value: Credentials) => void;
};

export function ForgotForm(props: ForgotFormProps) {
  const { inProgress, onChange } = props;
  const [credentials, setCredentials] = useState<Credentials>({
    email: '',
  });

  const handleChange = (e: FormEvent) => {
    e.stopPropagation();
    onChange(credentials);
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
        {inProgress ? (
          <ProgressCircle size='S' staticColor='white' isIndeterminate />
        ) : (
          'Submit'
        )}
      </Button>
    </Form>
  );
}
