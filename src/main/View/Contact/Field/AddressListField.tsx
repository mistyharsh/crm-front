import clsx from 'clsx';

import type { AddressInput } from '#api/Client.js';
import { AddressField } from '#shared/Contact/AddressField.js';
import { FormGrid } from '#shared/Form/FormGrid.js';
import { AddMoreButton } from '#shared/Form/AddMoreButton.js';
import { update } from '#shared/Util/Array.js';

export type AddressListFieldProps = {
  className?: string;
  value: AddressInput[];
  onChange: (addressList: AddressInput[]) => void;
};

export function AddressListField(props: AddressListFieldProps) {
  const { className, value, onChange } = props;

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
    <div className={clsx('AddressListField', className)}>
      {value.map((address, index) => (
        <AddressField
          key={`address-${index}`}
          value={address}
          onChange={(newAddress) => updatedAddress(index, newAddress)}
        />
      ))}
      <div className={FormGrid.grow}>
        <AddMoreButton onClick={addAddress} text='Add address' />
      </div>
    </div>
  );
}
