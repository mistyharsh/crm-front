import { Button, Checkbox, Group, Stack, TextInput } from '@mantine/core';

import type { PhoneInput } from '#api/Client.js';
import { update } from '#shared/Util/Array.js';

export type PhoneListFieldProps = {
  value: PhoneInput[];
  onChange: (phone: PhoneInput[]) => void;
};

export function PhoneListField(props: PhoneListFieldProps) {
  const { value, onChange } = props;
  const addPhone = () => {
    const updatedPhone = value.concat({
      countryId: '',
      number: '',
      isPrimary: true,
    });
    onChange(updatedPhone);
  };

  const updatePhone = (index: number, newPhone: PhoneInput) => {
    onChange(update(value, index, newPhone));
  };

  return (
    <Stack>
      <Button onClick={addPhone} variant='outline'>
        Add Phone Number
      </Button>
      {value.map((phone, index) => (
        <PhoneField
          key={`phone-${index}`}
          value={phone}
          onChange={(newPhone) => updatePhone(index, newPhone)}
        />
      ))}
    </Stack>
  );
}

export type PhoneFieldProps = {
  value: PhoneInput;
  onChange: (phone: PhoneInput) => void;
};

export function PhoneField(props: PhoneFieldProps) {
  const { value, onChange } = props;
  return (
    <Stack>
      <Group>
        <TextInput
          label='Country Id'
          width={'size-700'}
          value={value.countryId}
          onChange={(ev) =>
            onChange({ ...value, countryId: ev.currentTarget.value })
          }
        />
        <TextInput
          label='Number'
          type='tel'
          value={value.number}
          onChange={(ev) =>
            onChange({ ...value, number: ev.currentTarget.value })
          }
        />
      </Group>
      <Checkbox
        checked={value.isPrimary}
        label='Mark as primary'
        onChange={(ev) =>
          onChange({ ...value, isPrimary: ev.currentTarget.checked })
        }
      />
    </Stack>
  );
}
