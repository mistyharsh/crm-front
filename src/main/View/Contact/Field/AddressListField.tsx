import { Button, Stack } from '@mantine/core';
import { Plus } from 'lucide-react';

import type { AddressInput } from '#api/Client.js';
import { update } from '#shared/Util/Array.js';
import { AddressField } from '#shared/Contact/AddressField.js';
import { FormGrid } from '#shared/Grid/FormGrid.js';

export type AddressListFieldProps = {
  value: AddressInput[];
  onChange: (addressList: AddressInput[]) => void;
};

export function AddressListField(props: AddressListFieldProps) {
  const { value, onChange } = props;

  const addAddress = () => {
    const updatedAddress = value.concat({
      house: '',
      street: '',
      landmark: '',
      postalCodeId: '',
    });

    onChange(updatedAddress);
  };

  const updatedAddress = (index: number, newAddress: AddressInput) => {
    onChange(update(value, index, newAddress));
  };

  return (
    <>
      {value.map((address, index) => (
        <AddressField
          key={`address-${index}`}
          value={address}
          onChange={(newAddress) => updatedAddress(index, newAddress)}
        />
      ))}
      <div className={FormGrid.grow}>
        <Button
          variant='transparent'
          p={0}
          h={24}
          onClick={addAddress}
          leftSection={<Plus size={16} />}
          children='Add address'
        />
      </div>
    </>
  );
}
