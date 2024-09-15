import { Button, Stack } from '@mantine/core';

import type { AddressInput } from '#api/Client.js';
import { update } from '#shared/Util/Array.js';
import { AddressField } from './AddressField.js';

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
    <Stack>
      <Button onClick={addAddress} variant='outline'>
        Add
      </Button>
      {value.map((address, index) => (
        <AddressField
          key={`address-${index}`}
          value={address}
          onChange={(newAddress) => updatedAddress(index, newAddress)}
        />
      ))}
    </Stack>
  );
}
