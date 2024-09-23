import { Button, Group, Title } from '@mantine/core';

import { AddressListField } from './Field/AddressListField.js';
import { EmailListField } from './Field/EmailField.js';
import { NameField } from './Field/NameField.js';
import { DateOfBirthField, GenderField } from './Field/PersonField.js';
import { PhoneListField } from './Field/PhoneField.js';
import type { PersonInputFormApi } from './UsePersonContactForm.js';
import style from './PersonContactForm.module.css';
import { Baseline } from 'lucide-react';

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
      <div className={style.grid}>
        <Title className={style.grow} order={4} children='Basic Information' />
        <Field
          name='name'
          children={({ state, handleChange }) => (
            <NameField
              className={style.gridChild}
              value={state.value}
              onChange={handleChange}
            />
          )}
        />

        <Title className={style.grow} order={4} children='Contact Details' />

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
      </div>

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
