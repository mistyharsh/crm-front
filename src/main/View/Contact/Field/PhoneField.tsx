import { Button, Checkbox, Group, Stack, TextInput } from '@mantine/core';
import { Plus, X } from 'lucide-react';

import type { PhoneInput } from '#api/Client.js';
import { update } from '#shared/Util/Array.js';

import style from './Field.module.css';

export type PhoneListFieldProps = {
  value: PhoneInput[];
  onChange: (phone: PhoneInput[]) => void;
};

const emptyValue: PhoneInput = {
  countryId: '',
  number: '',
  isPrimary: true,
};

export function PhoneListField(props: PhoneListFieldProps) {
  const { value, onChange } = props;

  const addPhone = () => {
    const updatedPhone = value.concat(emptyValue);
    onChange(updatedPhone);
  };

  const updatePhone = (index: number, newPhone: PhoneInput) => {
    onChange(update(value, index, newPhone));
  };

  const list = [...value, emptyValue];

  return (
    <Stack>
      {list.map((phone, index) => (
        <PhoneField
          key={`phone-${index}`}
          value={phone}
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

export type PhoneFieldProps = {
  value: PhoneInput;
  onChange: (phone: PhoneInput) => void;
};

export function PhoneField(props: PhoneFieldProps) {
  const { value, onChange } = props;
  return (
    <Stack>
      <div className={style.phone}>
        <TextInput
          label='Country code'
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
        <Button p='xs' variant='default' children={<X />} />
      </div>
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
