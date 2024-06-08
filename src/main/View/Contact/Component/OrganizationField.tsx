import { TextField } from '@adobe/react-spectrum';

export type OrganizationNameProps = {
  value: string;
  onChange: (name: string) => void;
};

export function OrganizationNameInput({
  value,
  onChange,
}: OrganizationNameProps) {
  return (
    <TextField label='Organization Name' value={value} onChange={onChange} />
  );
}
