import { Stack } from '@mantine/core';

import type { PhoneInput } from '#api/Client.js';
import { PhoneField } from '#shared/Contact/PhoneField.js';
import { AddMoreButton } from '#shared/Form/AddMoreButton.js';
import { update } from '#shared/Util/Array.js';

export type PhoneListFieldProps = {
  className?: string;
  value: PhoneInput[];
  onChange: (phone: PhoneInput[]) => void;
};

const emptyValue: PhoneInput = {
  countryId: '',
  number: '',
  isPrimary: true,
};

export function PhoneListField(props: PhoneListFieldProps) {
  const { className, value, onChange } = props;

  const addPhone = () => {
    const updatedPhone = value.concat(emptyValue);
    onChange(updatedPhone);
  };

  const updatePhone = (index: number, newPhone: PhoneInput) => {
    onChange(update(value, index, newPhone));
  };

  return (
    <Stack className={className}>
      {value.map((phone, index) => (
        <PhoneField
          key={`phone-${index}`}
          value={phone}
          label='Phone'
          onChange={(newPhone) => updatePhone(index, newPhone)}
        />
      ))}
      <div>
        <AddMoreButton onClick={addPhone} text='Add phone' />
      </div>
    </Stack>
  );
}
