import { Select, TextInput } from '@mantine/core';
import clsx from 'clsx';

import type { AddressInput } from '#api/Client.js';
import { FormGrid } from '#shared/Grid/FormGrid.js';
import style from './Contact.module.css';

export type AddressFieldProps = {
  value: AddressInput;
  onChange: (address: AddressInput) => void;
  elementType?: 'div' | 'fieldset';
};

const data = [
  { value: 'eur', label: '🇪🇺 EUR' },
  { value: 'usd', label: '🇺🇸 USD' },
  { value: 'cad', label: '🇨🇦 CAD' },
  { value: 'gbp', label: '🇬🇧 GBP' },
  { value: 'aud', label: '🇦🇺 AUD' },
];


export function AddressField(props: AddressFieldProps) {
  const { value, onChange } = props;

  return (
    <div className={clsx('AddressField', style.address)}>
      <Select
        className={FormGrid.column1}
        label='Country'
        data={data}
        withCheckIcon={false}
        onChange={undefined}
      />
      <TextInput
        label='State'
        value={value.landmark}
        onChange={(ev) => {
          onChange({ ...value, landmark: ev.target.value });
        }}
      />
      <TextInput
        label='House/Apartment'
        value={value.house}
        onChange={(ev) => {
          onChange({ ...value, house: ev.target.value });
        }}
      />
      <TextInput
        label='Street'
        value={value.street}
        onChange={(ev) => {
          onChange({ ...value, street: ev.target.value });
        }}
      />
      <TextInput
        label='Landmark'
        value={value.landmark}
        onChange={(ev) => {
          onChange({ ...value, landmark: ev.target.value });
        }}
      />

      <TextInput
        label='City'
        value={value.postalCodeId}
        onChange={(ev) => {
          onChange({ ...value, postalCodeId: ev.target.value });
        }}
      />
      <TextInput
        label='Postal code'
        value={value.postalCodeId}
        onChange={(ev) => {
          onChange({ ...value, postalCodeId: ev.target.value });
        }}
      />
    </div>
  );
}
