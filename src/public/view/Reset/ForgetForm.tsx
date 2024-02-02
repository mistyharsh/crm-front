import {
  Avatar,
  Form,
  TextField,
  ButtonGroup,
  Button,
  Link,
  Flex,
  Heading,
} from '@adobe/react-spectrum';

function ForgetForm() {
  return (
    <Flex direction='column' justifyContent='space-between'>
      <Avatar
        src='https://i.imgur.com/kJOwAdv.png'
        alt='default Adobe avatar'
        size='avatar-size-10000'
      />
      <Flex direction='column'>
        <Heading level={1}>Forgot password</Heading>
        <Form isQuiet validationBehavior='native' maxWidth='size-3000'>
          <TextField label='Email' name='email' type='email' isRequired />
          <ButtonGroup>
            <Button
              type='submit'
              variant='primary'
              width='single-line-width'
              style='fill'
              staticColor='black'
            >
              Submit
            </Button>
          </ButtonGroup>
          <Link href='/public/login' isQuiet variant='secondary'>
            Back to login
          </Link>
        </Form>
      </Flex>
    </Flex>
  );
}

export default ForgetForm;
