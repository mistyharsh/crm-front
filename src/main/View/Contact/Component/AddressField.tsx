import { Button, Flex, TextField, View } from '@adobe/react-spectrum';

import type { AddressInput } from '#api/Operation.js';
import { update } from '#shared/Util/Array.js';

export type AddressFieldProps = {
  value: AddressInput;
  onChange: (address: AddressInput) => void;
};

export type AddressListFieldProps = {
  value: AddressInput[];
  onChange: (addressList: AddressInput[]) => void;
};

export function AddressField(props: AddressFieldProps) {
  const { value, onChange } = props;

  return (
    <Flex>
      <TextField
        label='House'
        value={value.house}
        onChange={(house) => {
          onChange({ ...value, house });
        }}
      />
      <TextField
        label='Street'
        value={value.street}
        onChange={(street) => {
          onChange({ ...value, street });
        }}
      />
      <TextField
        label='Landmark'
        value={value.landmark}
        onChange={(landmark) => {
          onChange({ ...value, landmark });
        }}
      />
      <TextField
        label='Postal Code'
        value={value.postalCodeId}
        onChange={(postalCodeId) => {
          onChange({ ...value, postalCodeId });
        }}
      />
    </Flex>
  );
}

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
    <View>
      <Button onPress={addAddress} variant='secondary'>
        Add
      </Button>
      {value.map((address, index) => (
        <AddressField
          key={`address-${index}`}
          value={address}
          onChange={(newAddress) => updatedAddress(index, newAddress)}
        />
      ))}
    </View>
  );
}
