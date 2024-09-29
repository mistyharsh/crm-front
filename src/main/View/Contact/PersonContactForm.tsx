import { Button, Group } from '@mantine/core';
import { Cake, MapPin, Send, User } from 'lucide-react';

import { FormGrid } from '#shared/Form/FormGrid.js';
import { SectionTitle } from '#shared/Form/SectionTitle.js';
import { AddressListField } from './Field/AddressListField.js';
import { EmailListField } from './Field/EmailListField.js';
import { NameField } from './Field/NameField.js';
import { DateOfBirthField, GenderField } from './Field/PersonField.js';
import { PhoneListField } from './Field/PhoneListField.js';
import type { PersonInputFormApi } from './UsePersonContactForm.js';

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
        <SectionTitle title='Basic Information' icon={User} />

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

        <SectionTitle title='Contact details' icon={Send} />

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

        <SectionTitle title='Address' icon={MapPin} />

        <Field
          name='addresses'
          children={({ state, handleChange }) => (
            <AddressListField className={FormGrid.subgrid} value={state.value} onChange={handleChange} />
          )}
        />

        <SectionTitle title='Personal details' icon={Cake} />

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
