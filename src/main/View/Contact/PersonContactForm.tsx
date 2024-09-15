import { Button, Group, TextInput, Title } from '@mantine/core';

import { AddressListField } from './Field/AddressListField.js';
import { EmailListField } from './Field/EmailField.js';
import { NameField } from './Field/NameField.js';
import { DateOfBirthField, GenderField } from './Field/PersonField.js';
import { PhoneListField } from './Field/PhoneField.js';
import type { PersonInputFormApi } from './UsePersonContactForm.js';

export type PersonContactFormProps = {
  form: PersonInputFormApi;
};

export function PersonContactForm(_props: PersonContactFormProps) {
  const { form } = _props;

  const { Field } = form;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <Title order={2}>Person Information</Title>
      <Field
        name='name'
        children={({ state, handleChange }) => (
          <NameField value={state.value} onChange={handleChange} />
        )}
      />

      <Field
        name='dob'
        children={({ state, handleChange }) => (
          <DateOfBirthField value={state.value} onChange={handleChange} />
        )}
      />
      <Field
        name='gender'
        children={({ state, handleChange }) => (
          <GenderField value={state.value} onChange={handleChange} />
        )}
      />
      <Field
        name='phones'
        children={({ state, handleChange }) => (
          <PhoneListField value={state.value} onChange={handleChange} />
        )}
      />
      <Field
        name='emails'
        children={({ state, handleChange }) => (
          <EmailListField value={state.value} onChange={handleChange} />
        )}
      />
      <Field
        name='addresses'
        children={({ state, handleChange }) => (
          <AddressListField value={state.value} onChange={handleChange} />
        )}
      />
      <Group>
        <Button type='submit' variant='filled'>
          Save
        </Button>
        <Button type='reset' variant='light'>
          Reset
        </Button>
      </Group>
    </form>
  );
}
