import { Button, Form, ProgressCircle, TextField } from '@adobe/react-spectrum';

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
        value={userEmail.email}
        onChange={(email) => setUserEmail({ ...userEmail, email })}
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
