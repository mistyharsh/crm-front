import { Button, Stack } from '@mantine/core';
import { Plus } from 'lucide-react';

import type { PhoneInput } from '#api/Client.js';
import { PhoneField } from '#shared/Field/PhoneField.js';
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

  const list = [...value, emptyValue];

  return (
    <Stack className={className}>
      {list.map((phone, index) => (
        <PhoneField
          key={`phone-${index}`}
          value={phone}
          label='Phone'
          onChange={(newPhone) => updatePhone(index, newPhone)}
        />
      ))}
      <div>
        <Button
          variant='transparent'
          p={0}
          h={24}
          onClick={addPhone}
          leftSection={<Plus size={16} />}
          children='Add more'
        />
      </div>
    </Stack>
  );
}
