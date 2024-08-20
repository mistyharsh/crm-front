import { Button, Checkbox, Flex, TextField, View } from '@adobe/react-spectrum';

import type { EmailInput, PhoneInput } from '#api/Operation.js';
import { update } from '#shared/Util/Array.js';

export type EmailFieldProps = {
  value: EmailInput;
  onChange: (mail: EmailInput) => void;
};

export type EmailListFieldProps = {
  value: EmailInput[];
  onChange: (mail: EmailInput[]) => void;
};

export type PhoneFieldProps = {
  value: PhoneInput;
  onChange: (phone: PhoneInput) => void;
};

export type PhoneListFieldProps = {
  value: PhoneInput[];
  onChange: (phone: PhoneInput[]) => void;
};

export function EmailField(props: EmailFieldProps) {
  const { value, onChange } = props;
  return (
    <Flex>
      <TextField
        label='Email'
        value={value.address}
        onChange={(address) => onChange({ ...value, address })}
        type='email'
      />
      <Checkbox
        isSelected={value.isPrimary}
        onChange={(isPrimary) => onChange({ ...value, isPrimary })}
      >
        Is This Your primary e-mail?
      </Checkbox>
    </Flex>
  );
}

export function EmailListField(props: EmailListFieldProps) {
  const { value, onChange } = props;
  const addEmail = () => {
    const updateEmail = value.concat({
      address: '',
      isPrimary: false,
    });
    onChange(updateEmail);
  };

  const handlEmailChange = (index: number, newEmail: EmailInput) => {
    onChange(update(value, index, newEmail));
  };

  return (
    <View>
      <Button onPress={addEmail} variant='secondary'>
        Add Email
      </Button>
      {value.map((email, index) => (
        <EmailField
          key={`email-${index}`}
          value={email}
          onChange={(newEmail) => handlEmailChange(index, newEmail)}
        />
      ))}
    </View>
  );
}

export function PhoneField(props: PhoneFieldProps) {
  const { value, onChange } = props;
  return (
    <Flex>
      <Flex>
        <TextField
          label='Country Id'
          alignSelf={'flex-start'}
          width={'size-700'}
          value={value.countryId}
          onChange={(countryId) => onChange({ ...value, countryId })}
        />
        <TextField
          label='Number'
          type='tel'
          alignSelf={'flex-end'}
          value={value.number}
          onChange={(number) => onChange({ ...value, number })}
        />
      </Flex>
      <Checkbox onChange={(isPrimary) => onChange({ ...value, isPrimary })}>
        Is This Your primary number?
      </Checkbox>
    </Flex>
  );
}

export function PhoneListField(props: PhoneListFieldProps) {
  const { value, onChange } = props;
  const addPhone = () => {
    const updatedPhone = value.concat({
      countryId: '',
      number: '',
      isPrimary: true,
    });
    onChange(updatedPhone);
  };

  const updatePhone = (index: number, newPhone: PhoneInput) => {
    onChange(update(value, index, newPhone));
  };

  return (
    <View>
      <Button onPress={addPhone} variant='secondary'>
        Add Phone Number
      </Button>
      {value.map((phone, index) => (
        <PhoneField
          key={`phone-${index}`}
          value={phone}
          onChange={(newPhone) => updatePhone(index, newPhone)}
        />
      ))}
    </View>
  );
}
