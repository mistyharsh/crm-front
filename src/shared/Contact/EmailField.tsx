import { Button, TextInput } from '@mantine/core';
import { X } from 'lucide-react';

import type { EmailInput } from '#api/Client.js';
import style from './Contact.module.css';

export type EmailFieldProps = {
  value: EmailInput;
  onChange: (mail: EmailInput) => void;
};

export function EmailField(props: EmailFieldProps) {
  const { value, onChange } = props;
  return (
    <div className={style.email}>
      <TextInput
        label='Email'
        value={value.address}
        onChange={(ev) =>
          onChange({ ...value, address: ev.currentTarget.value })
        }
        type='email'
      />
      <Button p='xs' variant='default' children={<X />} />
    </div>
  );
}
