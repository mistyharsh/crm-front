import { Group, Stack, TextInput } from '@mantine/core';

import type { AddressInput } from '#api/Client.js';

export type AddressFieldProps = {
  value: AddressInput;
  onChange: (address: AddressInput) => void;
};

export function AddressField(props: AddressFieldProps) {
  const { value, onChange } = props;

  return (
    <Stack>
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
      <Group>
        <TextInput
          label='Landmark'
          value={value.landmark}
          onChange={(ev) => {
            onChange({ ...value, landmark: ev.target.value });
          }}
        />
        <TextInput
          label='Postal Code'
          value={value.postalCodeId}
          onChange={(ev) => {
            onChange({ ...value, postalCodeId: ev.target.value });
          }}
        />
      </Group>
    </Stack>
  );
}
