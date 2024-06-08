import { Button, Checkbox, Flex, TextField } from '@adobe/react-spectrum';

import type { EmailInput, PhoneInput } from '#shared/gen/Api.js';

export type EmailProps = {
  value: EmailInput;
  onChange: (mail: EmailInput) => void;
};

export type EmailListProps = {
  value: EmailInput[];
  onChange: (mail: EmailInput[]) => void;
};

export type PhoneProps = {
  value: PhoneInput;
  onChange: (phone: PhoneInput) => void;
};

export type PhoneListProps = {
  value: PhoneInput[];
  onChange: (phone: PhoneInput[]) => void;
};

export function EmailField({ value, onChange }: EmailProps) {
  return (
    <Flex key={value.address}>
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

export function EmailListField({ value, onChange }: EmailListProps) {
  const handleAddEmail = () => {
    const updateEmail = value.concat({ address: '', isPrimary: false });
    onChange(updateEmail);
  };

  const handlEmailChange = (index: number, newEmail: EmailInput) => {
    const updatedEmail = value.map((email, idx) =>
      idx === index ? newEmail : email
    );
    onChange(updatedEmail);
  };

  return (
    <>
      <Button onPress={handleAddEmail} variant='secondary'>
        Add Email
      </Button>
      {value.map((email, index) => (
        <EmailField
          value={email}
          onChange={(newEmail) => handlEmailChange(index, newEmail)}
        />
      ))}
    </>
  );
}

export function PhonesField({ value, onChange }: PhoneProps) {
  return (
    <Flex key={Math.random()}>
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

export function PhoneListFields({ value, onChange }: PhoneListProps) {
  const handleAddPhone = () => {
    const updatePhone = value.concat({
      countryId: '',
      number: '',
      isPrimary: true,
    });
    onChange(updatePhone);
  };

  const handlPhoneChange = (index: number, newPhone: PhoneInput) => {
    const updatedPhone = value.map((phone, idx) =>
      idx === index ? newPhone : phone
    );
    onChange(updatedPhone);
  };

  return (
    <>
      <Button onPress={handleAddPhone} variant='secondary'>
        Add Phone Number
      </Button>
      {value.map((phone, index) => (
        <PhonesField
          value={phone}
          onChange={(newPhone) => handlPhoneChange(index, newPhone)}
        />
      ))}
    </>
  );
}
