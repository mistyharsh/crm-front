import {
  DatePicker,
  Flex,
  Heading,
  Item,
  Picker,
  TextField,
  Button,
  View,
} from '@adobe/react-spectrum';

import type { PersonInput } from '#shared/gen/Api.js';
import { update } from '#shared/Util/Array.js';
import { AddressListField } from './AddressField';
import { EmailListField, PhoneListField } from './ContactInformationFields';

export type PersonFieldProps = {
  value: PersonInput;
  onChange: (person: PersonInput) => void;
};

export type PersonListFieldProps = {
  value: PersonInput[];
  onChange: (person: PersonInput[]) => void;
};

export type PersonGivenNameFieldProp = {
  value: string;
  onChange: (givenName: string) => void;
};

export type PersonMiddleNameFieldProp = {
  value: string;
  onChange: (middleName: string) => void;
};

export type PersonFamilyNameFieldProp = {
  value: string;
  onChange: (familyName: string) => void;
};

export type PersonDateOfBirthFieldProp = {
  value: string;
  onChange: (value: string) => void;
};

export type PersonGenderFieldProp = {
  value: string;
  onChange: (gender: string) => void;
};

export function PersonGivenNameField(props: PersonGivenNameFieldProp) {
  const { value, onChange } = props;
  return (
    <>
      <TextField
        label='Given Name'
        alignSelf={'flex-start'}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
export function PersonMiddleNameField(props: PersonMiddleNameFieldProp) {
  const { value, onChange } = props;
  return (
    <>
      <TextField
        label='Middle Name'
        alignSelf={'flex-start'}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
export function PersonFamilyNameField(props: PersonFamilyNameFieldProp) {
  const { value, onChange } = props;
  return (
    <>
      <TextField
        label='Family Name'
        alignSelf={'flex-start'}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export function PersonDateOfBirthField(props: PersonDateOfBirthFieldProp) {
  const { value, onChange } = props;

  const updateDate = (dob: any) => {
    const month = dob.month < 10 ? `0${dob.month}` : dob.month;
    const day = dob.day < 10 ? `0${dob.day}` : dob.day;
    dob = `${dob.year}-${month}-${day}`;
    return dob;
  };

  return (
    <>
      <DatePicker
        label='Date of Birth'
        // value={value.dob}
        onChange={(dob) => onChange(updateDate(dob))}
      />
    </>
  );
}

export function PersonGenderField(props: PersonGenderFieldProp) {
  const { value, onChange } = props;
  const convertKey = (gender: any) => {
    return `${gender}`;
  };

  return (
    <>
      <Picker
        label='Gender'
        alignSelf={'flex-start'}
        selectedKey={value}
        onSelectionChange={(gender) => onChange(convertKey(gender))}
      >
        <Item key='male'>Male</Item>
        <Item key='female'>Female</Item>
        <Item key='Other'>Other</Item>
        <Item key='unknown'>Unknown</Item>
      </Picker>
    </>
  );
}

export function PersonField(props: PersonFieldProps) {
  const { value, onChange } = props;

  return (
    <Flex direction={'column'}>
      <Flex justifyContent={'space-between'}>
        <PersonGivenNameField
          value={value.givenName}
          onChange={(givenName) => onChange({ ...value, givenName })}
        />
        <PersonMiddleNameField
          value={value.givenName}
          onChange={(middleName) => onChange({ ...value, middleName })}
        />
        <PersonFamilyNameField
          value={value.givenName}
          onChange={(familyName) => onChange({ ...value, familyName })}
        />
      </Flex>
      <PersonDateOfBirthField
        value={value.dob}
        onChange={(dob) => onChange({ ...value, dob })}
      />
      <PersonGenderField
        value={value.gender}
        onChange={(gender) => onChange({ ...value, gender })}
      />
      <PhoneListField
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

export function PersonListField(props: PersonListFieldProps) {
  const { value, onChange } = props;
  const addNewField = () => {
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

  const updatePerson = (index: number, newPerson: PersonInput) => {
    onChange(update(value, index, newPerson));
  };

  return (
    <View>
      <Button onPress={addNewField} variant='secondary'>
        Add Person
      </Button>
      {value.map((person, index) => (
        <PersonField
          key={`person-${index}`}
          value={person}
          onChange={(newPerson) => updatePerson(index, newPerson)}
        />
      ))}
    </View>
  );
}
