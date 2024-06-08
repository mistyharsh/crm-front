import {
  DatePicker,
  Flex,
  Heading,
  Item,
  Picker,
  TextField,
  Button,
} from '@adobe/react-spectrum';

import type { PersonInput } from '#shared/gen/Api.js';
import { AddressListField } from './AddressField';
import { EmailListField, PhoneListFields } from './ContactInformationFields';

export type PersonProps = {
  value: PersonInput;
  onChange: (person: PersonInput) => void;
};

export type PersonListProps = {
  value: PersonInput[];
  onChange: (person: PersonInput[]) => void;
};

export function PersonField({ value, onChange }: PersonProps) {
  return (
    <Flex direction={'column'} key={Math.random()}>
      <Flex justifyContent={'space-between'}>
        <TextField
          label='Given Name'
          alignSelf={'flex-start'}
          value={value.givenName}
          onChange={(givenName) => onChange({ ...value, givenName })}
        />
        <TextField
          label='Middle Name'
          value={value.middleName || ''}
          onChange={(middleName) => onChange({ ...value, middleName })}
          alignSelf={'center'}
        />
        <TextField
          label='Family Name'
          value={value.familyName}
          onChange={(familyName) => onChange({ ...value, familyName })}
          alignSelf={'flex-end'}
        />
      </Flex>
      <DatePicker
        label='Date of Birth'
        onChange={(dob) => onChange({ ...value, dob })}
      />
      <Picker
        label='Gender'
        alignSelf={'flex-start'}
        selectedKey={value.gender}
        onSelectionChange={(gender) => onChange({ ...value, gender })}
      >
        <Item key='male'>Male</Item>
        <Item key='female'>Female</Item>
        <Item key='Other'>Other</Item>
        <Item key='unknown'>Unknown</Item>
      </Picker>
      <PhoneListFields
        value={value.phones}
        onChange={(phones) => onChange({ ...value, phones })}
      />
      <EmailListField
        value={value.emails}
        onChange={(emails) => onChange({ ...value, emails })}
      />
      <Heading level={3}>Address</Heading>
      <AddressListField
        value={value.addresses}
        onChange={(addresses) => onChange({ ...value, addresses })}
      />
    </Flex>
  );
}

export function PersonListField({ value, onChange }: PersonListProps) {
  const handleAddNewField = () => {
    const updateEmail = value.concat({
      givenName: '',
      middleName: '',
      familyName: '',
      dob: '',
      gender: '',
      phones: [],
      emails: [],
      addresses: [],
    });
    onChange(updateEmail);
  };

  const handlPersonChange = (index: number, newPerson: PersonInput) => {
    const updatedPerson = value.map((person, idx) =>
      idx === index ? newPerson : person
    );
    onChange(updatedPerson);
  };

  return (
    <>
      <Button onPress={handleAddNewField} variant='secondary'>
        Add Person
      </Button>
      {value.map((person, index) => (
        <PersonField
          value={person}
          onChange={(newPerson) => handlPersonChange(index, newPerson)}
        />
      ))}
    </>
  );
}
