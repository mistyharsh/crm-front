import { Button, Stack, TextInput } from '@mantine/core';
import { Plus } from 'lucide-react';

import type { EmailInput } from '#api/Client.js';
import { update } from '#shared/Util/Array.js';

export type EmailListFieldProps = {
  className?: string;
  value: EmailInput[];
  onChange: (mail: EmailInput[]) => void;
};

const emptyValue: EmailInput = {
  address: '',
  isPrimary: true,
};

export function EmailListField(props: EmailListFieldProps) {
  const { className, value, onChange } = props;
  const addEmail = () => {
    const updateEmail = value.concat(emptyValue);
    onChange(updateEmail);
  };

  const handlEmailChange = (index: number, newEmail: EmailInput) => {
    onChange(update(value, index, newEmail));
  };

  const list = [...value, emptyValue];

  return (
    <Stack className={className}>
      {list.map((email, index) => (
        <EmailField
          key={`email-${index}`}
          value={email}
          onChange={(newEmail) => handlEmailChange(index, newEmail)}
        />
      ))}
      <div>
        <Button
          variant='transparent'
          p={0}
          h={24}
          onClick={addEmail}
          leftSection={<Plus size={16} />}
          children='Add more'
        />
      </div>
    </Stack>
  );
}

export type EmailFieldProps = {
  value: EmailInput;
  onChange: (mail: EmailInput) => void;
};

export function EmailField(props: EmailFieldProps) {
  const { value, onChange } = props;
  return (
    <TextInput
      label='Email'
      value={value.address}
      onChange={(ev) =>
        onChange({ ...value, address: ev.currentTarget.value })
      }
      type='email'
    />
  );
}
