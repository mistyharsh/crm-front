import { Button, Group, Title } from '@mantine/core';

import { AddressListField } from './Field/AddressListField.js';
import { EmailListField } from './Field/EmailField.js';
import { OrganizationNameInput } from './Field/OrganizationField.js';
import { PersonListField } from './Field/PersonListField.js';
import { PhoneListField } from './Field/PhoneField.js';
import type { OrgInputFormApi } from './UseOrgContactForm.js';

export type OrgContactFormProps = {
  form: OrgInputFormApi;
};

export function OrgContactForm(_props: OrgContactFormProps) {
  const { form } = _props;

  const { Field } = form;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <Title order={2}>Organization Information</Title>
      <Field
        name='name'
        children={({ state, handleChange }) => (
          <OrganizationNameInput value={state.value} onChange={handleChange} />
        )}
      />

      <Title order={3}>Address</Title>
      <Field
        name='addresses'
        children={({ state, handleChange }) => (
          <AddressListField value={state.value} onChange={handleChange} />
        )}
      />
      <Title order={3}>Contact Information</Title>
      <Field
        name='emails'
        children={({ state, handleChange }) => (
          <EmailListField value={state.value} onChange={handleChange} />
        )}
      />
      <Field
        name='phones'
        children={({ state, handleChange }) => (
          <PhoneListField value={state.value} onChange={handleChange} />
        )}
      />
      <Title order={2}>Person Information</Title>
      <Field
        name='people'
        children={({ state, handleChange }) => (
          <PersonListField value={state.value} onChange={handleChange} />
        )}
      />
      <Group>
        <Button type='submit' variant='primary'>
          Save
        </Button>
        <Button type='reset' variant='light'>
          Reset
        </Button>
      </Group>
    </form>
  );
}
