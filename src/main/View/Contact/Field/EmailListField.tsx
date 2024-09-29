import { Button, Stack } from '@mantine/core';
import { Plus } from 'lucide-react';

import type { EmailInput } from '#api/Client.js';
import { EmailField } from '#shared/Contact/EmailField.js';
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

  return (
    <Stack className={className}>
      {value.map((email, index) => (
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
          children='Add email'
        />
      </div>
    </Stack>
  );
}
