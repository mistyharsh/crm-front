import { Select, TextInput, Button } from '@mantine/core';
import clsx from 'clsx';
import { X } from 'lucide-react';

import type { PhoneInput } from '#api/Client.js';
import style from './PhoneField.module.css';

const data = [
  { value: 'eur', label: '🇪🇺 EUR' },
  { value: 'usd', label: '🇺🇸 USD' },
  { value: 'cad', label: '🇨🇦 CAD' },
  { value: 'gbp', label: '🇬🇧 GBP' },
  { value: 'aud', label: '🇦🇺 AUD' },
];

export type PhoneFieldProps = {
  className?: string;
  label?: string;
  placeholder?: string;
  value: PhoneInput;
  onChange: (value: PhoneInput) => void;
};

export function PhoneField(props: PhoneFieldProps) {
  const { className, label, placeholder, value, onChange } = props;

  return (
    <div className={clsx(style.phone, className)}>
      <Select
        label='Country code'
        data={data}
        withCheckIcon={false}
        value={value.countryId}
        onChange={(countryId) =>
          onChange({ ...value, countryId: countryId ?? '' })
        }
      />
      <TextInput
        type='number'
        placeholder={placeholder}
        label={label}
      />
      <Button p='xs' variant='default' children={<X />} />
    </div>
  );
}
