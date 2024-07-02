import { Button, ButtonGroup, Form, Heading } from '@adobe/react-spectrum';

import { AddressListField } from './Component/AddressField.js';
import {
  EmailListField,
  PhoneListField,
} from './Component/ContactInformationFields.js';
import { OrganizationNameInput } from './Component/OrganizationField.js';
import { PersonListField } from './Component/PersonInputs.js';
import type { OrgInputFormApi } from './UseOrgContactForm.js';

export type OrgContactFormProps = {
  form: OrgInputFormApi;
};

export function OrgContactForm(_props: OrgContactFormProps) {
  const { form } = _props;

  const { Field } = form;

  return (
    <Form
      necessityIndicator='icon'
      validationBehavior='native'
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <Heading level={2}>Organization Information</Heading>
      <Field
        name='name'
        children={({ state, handleChange }) => (
          <OrganizationNameInput value={state.value} onChange={handleChange} />
        )}
      />

      <Heading level={3}>Address</Heading>
      <Field
        name='addresses'
        children={({ state, handleChange }) => (
          <AddressListField value={state.value} onChange={handleChange} />
        )}
      />
      <Heading level={3}>Contact Information</Heading>
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
      <Heading level={2}>Person Information</Heading>
      <Field
        name='people'
        children={({ state, handleChange }) => (
          <PersonListField value={state.value} onChange={handleChange} />
        )}
      />
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
