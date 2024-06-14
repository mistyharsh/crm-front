import { Button, ButtonGroup, Form, Heading } from '@adobe/react-spectrum';

import { type FormEvent } from 'react';

import { type OrganizationInput } from '#shared/gen/Api.js';
import { AddressListField } from './Component/AddressField';
import {
  EmailListField,
  PhoneListField,
} from './Component/ContactInformationFields';
import { OrganizationNameInput } from './Component/OrganizationField';
import { PersonListField } from './Component/PersonInputs';

export type OrgContactFormProps = {
  value: OrganizationInput;
  tenantId: string;
  onInput: (value: OrganizationInput) => void;
  onSubmit: (value: OrganizationInput, tenantId: string) => void;
};

export function OrgContactForm(_props: OrgContactFormProps) {
  const { value, onInput, tenantId, onSubmit } = _props;

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
      <OrganizationNameInput
        value={value.name}
        onChange={(name) => onInput({ ...value, name })}
      />
      <Heading level={3}>Address</Heading>
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
