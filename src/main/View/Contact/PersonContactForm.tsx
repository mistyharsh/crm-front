import { Button, Group, Title } from '@mantine/core';

import { FormGrid } from '#shared/Grid/FormGrid.js';
import { AddressListField } from './Field/AddressListField.js';
import { EmailListField } from './Field/EmailListField.js';
import { NameField } from './Field/NameField.js';
import { DateOfBirthField, GenderField } from './Field/PersonField.js';
import { PhoneListField } from './Field/PhoneListField.js';
import type { PersonInputFormApi } from './UsePersonContactForm.js';
import { User } from 'lucide-react';

export type PersonContactFormProps = {
  form: PersonInputFormApi;
};

export function PersonContactForm(props: PersonContactFormProps) {
  const { form } = props;
  const { Field } = form;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <FormGrid>
        <Group gap={'xs'} className={FormGrid.grow}>
          <User size={20} />
          <Title display={'flex'}  order={4}>
            Basic Information
          </Title>
        </Group>
        <Field
          name='name'
          children={({ state, handleChange }) => (
            <NameField
              className={FormGrid.subgrid}
              value={state.value}
              onChange={handleChange}
            />
          )}
        />

        <Title className={FormGrid.grow} order={4} children='Contact Details' />

        <Field
          name='phones'
          children={({ state, handleChange }) => (
            <PhoneListField className={FormGrid.grow} value={state.value} onChange={handleChange} />
          )}
        />

        <Field
          name='emails'
          children={({ state, handleChange }) => (
            <EmailListField className={FormGrid.grow} value={state.value} onChange={handleChange} />
          )}
        />

        <Field
          name='addresses'
          children={({ state, handleChange }) => (
            <AddressListField value={state.value} onChange={handleChange} />
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
      </FormGrid>

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
