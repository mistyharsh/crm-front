import React from 'react';
import {
  Form,
  TextField,
  ButtonGroup,
  Button,
  Link,
  Divider,
  Flex,
  Text,
} from '@adobe/react-spectrum';

function LoginForm() {
  return (
    <div className='loginPage'>
      <Form validationBehavior='native' width='size-3000' height='size-3000'>
        <TextField
          label='Email'
          name='email'
          type='email'
          isRequired
          description='Your email id'
        />
        <TextField
          label='Password'
          name='password'
          type='password'
          isRequired
          description='Password'
        />
        <Link href='public/forget-password/' variant='secondary' isQuiet>
          Forget password?
        </Link>
        <ButtonGroup width='single-line-width'>
          <Button
            type='submit'
            variant='primary'
            width='single-line-width'
            style='fill'
            staticColor='black'
          >
            Login
          </Button>
        </ButtonGroup>
        <Link href='/reset-password/$resetToken' isQuiet variant='secondary'>
          Don't have an account? Sign-up
        </Link>
      </Form>
    </div>
  );
}

export default LoginForm;
