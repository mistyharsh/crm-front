import { TextInput } from '@mantine/core';
import clsx from 'clsx';

export type NameTuple = [string, string, string];

export type NameFieldProps = {
  className?: string;
  value: NameTuple;
  onChange: (value: NameTuple) => void;
};

export function NameField(props: NameFieldProps) {
  const { className, value, onChange } = props;

  return (
    <div className={clsx('NameField', className)}>
      <TextInput
        label='First name'
        value={value[0]}
        onChange={(ev) =>
          onChange([ev.currentTarget.value, value[1], value[2]])
        }
      />
      {/* <TextInput
        label='Middle name'
        value={value[1]}
        onChange={(ev) =>
          onChange([value[0], ev.currentTarget.value, value[2]])
        }
      /> */}
      <TextInput
        label='Surname'
        value={value[2]}
        onChange={(ev) =>
          onChange([value[0], value[1], ev.currentTarget.value])
        }
      />
    </div>
  );
}
