import { Button, ButtonGroup, Form, Heading } from '@adobe/react-spectrum';

import { type FormEvent } from 'react';

import { type OrganizationInput } from '#shared/gen/Api.js';
import { AddressListField } from './Component/AddressField.js';
import {
  EmailListField,
  PhoneListField,
} from './Component/ContactInformationFields.js';
import { OrganizationNameInput } from './Component/OrganizationField.js';
import { PersonListField } from './Component/PersonInputs.js';
import type { OrgInputFormApi } from './UseOrgContactForm.js';

export type OrgContactFormProps = {
  tenantId: string;
  form: OrgInputFormApi;
  value: OrganizationInput;
  onInput: (value: OrganizationInput) => void;
  onSubmit: (value: OrganizationInput, tenantId: string) => void;
};

export function OrgContactForm(_props: OrgContactFormProps) {
  const { tenantId, form, value, onInput, onSubmit } = _props;

  const { Field } = form;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(value, tenantId);
  };

  return (
    <Form
      necessityIndicator='icon'
      validationBehavior='native'
      onSubmit={handleSubmit}
    >
      <Heading level={2}>Organization Information</Heading>

      <Field
        name='name'
        children={({ state, handleChange }) => (
          <OrganizationNameInput
            value={state.value}
            onChange={handleChange}
          />
        )}
      />

      <Heading level={3}>Address</Heading>
      <Field
        name='addresses'
        children={({ state, handleChange }) => (
          <AddressListField
            value={state.value}
            onChange={handleChange}
          />
        )}
      />

      <AddressListField
        value={value.addresses}
        onChange={(addresses) => onInput({ ...value, addresses })}
      />
      <Heading level={3}>Contact Information</Heading>
      <EmailListField
        value={value.emails}
        onChange={(emails) => onInput({ ...value, emails })}
      />
      <PhoneListField
        value={value.phones}
        onChange={(phones) => onInput({ ...value, phones })}
      />
      <Heading level={2}>Person Information</Heading>
      <PersonListField
        value={value.people}
        onChange={(people) => onInput({ ...value, people })}
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
