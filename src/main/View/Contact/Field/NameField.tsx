import { Group, TextInput } from '@mantine/core';

export type NameTuple = [string, string, string];

export type NameFieldProps = {
  value: NameTuple;
  onChange: (value: NameTuple) => void;
};

export function NameField(props: NameFieldProps) {
  const { value, onChange } = props;

  return (
    <Group>
      <TextInput
        label='Given Name'
        value={value[0]}
        onChange={(ev) =>
          onChange([ev.currentTarget.value, value[1], value[2]])
        }
      />
      <TextInput
        label='Middle Name'
        value={value[1]}
        onChange={(ev) =>
          onChange([value[0], ev.currentTarget.value, value[2]])
        }
      />
      <TextInput
        label='Family Name'
        value={value[2]}
        onChange={(ev) =>
          onChange([value[0], value[1], ev.currentTarget.value])
        }
      />
    </Group>
  );
}
