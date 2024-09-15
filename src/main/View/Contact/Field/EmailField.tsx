import { Button, Checkbox, Group, Stack, TextInput } from '@mantine/core';

import type { EmailInput } from '#api/Client.js';
import { update } from '#shared/Util/Array.js';

export type EmailListFieldProps = {
  value: EmailInput[];
  onChange: (mail: EmailInput[]) => void;
};

export function EmailListField(props: EmailListFieldProps) {
  const { value, onChange } = props;
  const addEmail = () => {
    const updateEmail = value.concat({
      address: '',
      isPrimary: false,
    });
    onChange(updateEmail);
  };

  const handlEmailChange = (index: number, newEmail: EmailInput) => {
    onChange(update(value, index, newEmail));
  };

  return (
    <Stack>
      <Button onClick={addEmail} variant='outline' children='Add Email' />
      {value.map((email, index) => (
        <EmailField
          key={`email-${index}`}
          value={email}
          onChange={(newEmail) => handlEmailChange(index, newEmail)}
        />
      ))}
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
    <Group>
      <TextInput
        label='Email'
        value={value.address}
        onChange={(ev) =>
          onChange({ ...value, address: ev.currentTarget.value })
        }
        type='email'
      />
      <Checkbox
        checked={value.isPrimary}
        onChange={(ev) =>
          onChange({ ...value, isPrimary: ev.currentTarget.checked })
        }
        label='Mark as primary'
      />
    </Group>
  );
}
