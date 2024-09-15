import { TextInput } from '@mantine/core';

export type OrganizationNameProps = {
  value: string;
  onChange: (name: string) => void;
};

export function OrganizationNameInput(props: OrganizationNameProps) {
  const { value, onChange } = props;
  return (
    <TextInput
      label='Organization Name'
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
}
