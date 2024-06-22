import {
  Button,
  ButtonGroup,
  Flex,
  Form,
  Heading,
} from '@adobe/react-spectrum';

import {
  PersonDateOfBirthField,
  PersonFamilyNameFiled,
  PersonGenderField,
  PersonGivenNameFiled,
  PersonMiddleNameFiled,
} from './Component/PersonInputs';
import type { PersonInputFormApi } from './UsePersonContactForm';
import {
  EmailListField,
  PhoneListField,
} from './Component/ContactInformationFields';
import { AddressListField } from './Component/AddressField';

export type PersonContactFormProps = {
  form: PersonInputFormApi;
};

export function PersonContactForm(_props: PersonContactFormProps) {
  const { form } = _props;

  const { Field } = form;

  return (
    <Form
      necessityIndicator='icon'
      validationBehavior='native'
      onSubmit={form.handleSubmit}
    >
      <Heading level={2}>Person Information</Heading>
      <Flex justifyContent={'space-between'}>
        <Field
          name='givenName'
          children={({ state, handleChange }) => (
            <PersonGivenNameFiled value={state.value} onChange={handleChange} />
          )}
        />
        <Field
          name='middleName'
          children={({ state, handleChange }) => (
            <PersonMiddleNameFiled
              value={state.value}
              onChange={handleChange}
            />
          )}
        />
        <Field
          name='familyName'
          children={({ state, handleChange }) => (
            <PersonFamilyNameFiled
              value={state.value}
              onChange={handleChange}
            />
          )}
        />
      </Flex>

      <Field
        name='dob'
        children={({ state, handleChange }) => (
          <PersonDateOfBirthField value={state.value} onChange={handleChange} />
        )}
      />
      <Field
        name='gender'
        children={({ state, handleChange }) => (
          <PersonGenderField value={state.value} onChange={handleChange} />
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
