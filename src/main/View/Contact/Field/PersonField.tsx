import { Select, Stack, Title } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import type { PersonInput } from '#api/Client.js';

import { AddressListField } from './AddressListField.js';
import { EmailListField } from './EmailField.js';
import { NameField } from './NameField.js';
import { PhoneListField } from './PhoneField.js';

export type PersonFieldProps = {
  value: PersonInput;
  onChange: (person: PersonInput) => void;
};

export function PersonField(props: PersonFieldProps) {
  const { value, onChange } = props;

  return (
    <Stack>
      <NameField
        value={[value.givenName, value.middleName ?? '', value.familyName]}
        onChange={([givenName, middleName, familyName]) =>
          onChange({ ...value, givenName, middleName, familyName })
        }
      />
      <DateOfBirthField
        value={value.dob}
        onChange={(dob) => onChange({ ...value, dob })}
      />
      <GenderField
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
      <Title order={3}>Address</Title>
      <AddressListField
        value={value.addresses}
        onChange={(addresses) => onChange({ ...value, addresses })}
      />
    </Stack>
  );
}

export type DateOfBirthFieldProp = {
  value: Date | null;
  onChange: (value: Date | null) => void;
};

export function DateOfBirthField(props: DateOfBirthFieldProp) {
  const { value, onChange } = props;

  return (
    <DatePickerInput
      label={'Date of Birth'}
      value={value}
      onChange={onChange}
    />
  );
}

export type GenderFieldProps = {
  value: string;
  onChange: (gender: string) => void;
};

export function GenderField(props: GenderFieldProps) {
  const { value, onChange } = props;

  return (
    <Select
      label='Gender'
      allowDeselect={false}
      data={[
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
        { label: 'Unknown', value: 'unknown' },
      ]}
      value={value}
      onChange={(value) => onChange(value!)}
    />
  );
}
