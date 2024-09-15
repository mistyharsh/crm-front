import { Button, Stack } from '@mantine/core';

import type { PersonInput } from '#api/Client.js';
import { update } from '#shared/Util/Array.js';
import { PersonField } from './PersonField.js';

export type PersonListFieldProps = {
  value: PersonInput[];
  onChange: (person: PersonInput[]) => void;
};

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
    <Stack>
      <Button onClick={addNewField} variant='secondary'>
        Add Person
      </Button>
      {value.map((person, index) => (
        <PersonField
          key={`person-${index}`}
          value={person}
          onChange={(newPerson) => updatePerson(index, newPerson)}
        />
      ))}
    </Stack>
  );
}
