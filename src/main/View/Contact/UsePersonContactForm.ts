import { useForm, type FormApi } from '@tanstack/react-form';

import type {
  AddressInput,
  EmailInput,
  PersonInput,
  PhoneInput,
} from '#api/Operation.js';
import type { NameTuple } from './Field/NameField.js';

export type PersonInputFormApi = FormApi<PersonInputModel>;

export type PersonInputModel = {
  addresses: AddressInput[];
  dob: Date | null;
  emails: EmailInput[];
  gender: string;
  name: NameTuple;
  phones: PhoneInput[];
};

const emptyValue: PersonInputModel = {
  addresses: [{
    house: '',
    street: '',
    landmark: '',
    postalCodeId: '',
  }],
  emails: [{
    address: '',
    isPrimary: true,
  }],
  phones: [{
    countryId: '',
    number: '',
    isPrimary: true,
  }],
  dob: null,
  name: ['', '', ''],
  gender: '',
};

export function usePersonContactForm(
  onSubmit: (value: PersonInput) => void
): PersonInputFormApi {
  return useForm<PersonInputModel>({
    defaultValues: emptyValue,
    onSubmit: ({ value }) => {
      const toSubmit: PersonInput = {
        ...value,
        givenName: value.name[0],
        middleName: value.name[1],
        familyName: value.name[2],
      };

      onSubmit(toSubmit);
    },
  });
}
