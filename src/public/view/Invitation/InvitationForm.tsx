import { Button, Form, Heading, TextField } from '@adobe/react-spectrum';
import { FormEvent, useState } from 'react';

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
    <Form
      necessityIndicator='icon'
      validationBehavior='native'
      onSubmit={handleChange}
    >
      <Heading level={3}>Hello {fullName}!!</Heading>
      <Heading level={4}>To claim your invitation enter password</Heading>
      <TextField
        label='Password'
        name='password'
        type='password'
        isRequired
        description='Password'
        value={password}
        onChange={setPassword}
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
