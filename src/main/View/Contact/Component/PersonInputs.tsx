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

export function PersonField(props: PersonFieldProps) {
  const { value, onChange } = props;
  const updateDate = (dob: any) => {
    const month = dob.month < 10 ? `0${dob.month}` : dob.month;
    const day = dob.day < 10 ? `0${dob.day}` : dob.day;
    dob = `${dob.year}-${month}-${day}`;

    onChange({ ...value, dob });
  };

  return (
    <Flex direction={'column'}>
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
        // value={value.dob}
        onChange={(dob) => updateDate(dob)}
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
