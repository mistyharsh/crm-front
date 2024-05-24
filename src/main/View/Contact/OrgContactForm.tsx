import { Button, ButtonGroup, Form, TextField } from '@adobe/react-spectrum';

export type OrgContactFormProps = {};

export function OrgContactForm(_props: OrgContactFormProps) {
  const onSubmit = () => {};

  return (
    <Form onSubmit={onSubmit}>
      <TextField label='First Name' />
      <ButtonGroup>
        <Button type='submit' variant='primary'>
          Save
        </Button>
        <Button type='reset' variant='secondary'>
          Reset
        </Button>
      </ButtonGroup>
    </Form>
  );
}
