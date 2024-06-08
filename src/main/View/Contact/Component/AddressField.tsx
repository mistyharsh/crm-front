import type { AddressInput } from '#shared/gen/Api.js';
import { Button, Flex, TextField } from '@adobe/react-spectrum';

export type AddressProps = {
  value: AddressInput;
  onChange: (address: AddressInput) => void;
};
export type AddressListProps = {
  value: AddressInput[];
  onChange: (addresses: AddressInput[]) => void;
};

export function AddressField({ value, onChange }: AddressProps) {
  return (
    <Flex key={Math.random()}>
      <TextField
        label='House'
        value={value.house}
        onChange={(house) => {
          onChange({ ...value, house });
        }}
        alignSelf={'flex-start'}
      />
      <TextField
        label='Street'
        value={value.street}
        onChange={(street) => {
          onChange({ ...value, street });
        }}
        alignSelf={'flex-start'}
      />
      <TextField
        label='Landmark'
        value={value.landmark}
        onChange={(landmark) => {
          onChange({ ...value, landmark });
        }}
        alignSelf={'flex-start'}
      />
      <TextField
        label='Postal Code'
        value={value.postalCodeId}
        onChange={(postalCodeId) => {
          onChange({ ...value, postalCodeId });
        }}
        alignSelf={'flex-start'}
      />
    </Flex>
  );
}

export function AddressListField({ value, onChange }: AddressListProps) {
  const handleAddAddress = () => {
    const updatedAddress = value.concat({
      house: '',
      street: '',
      landmark: '',
      postalCodeId: '',
    });
    onChange(updatedAddress);
  };

  const handleAddressChange = (index: number, newAddress: AddressInput) => {
    const updatedAddress = value.map((address, idx) =>
      idx === index ? newAddress : address
    );
    onChange(updatedAddress);
  };

  return (
    <>
      <Button onPress={handleAddAddress} variant='secondary'>
        Add
      </Button>
      {value.map((address, index) => (
        <AddressField
          value={address}
          onChange={(newAddress) => handleAddressChange(index, newAddress)}
        />
      ))}
    </>
  );
}
