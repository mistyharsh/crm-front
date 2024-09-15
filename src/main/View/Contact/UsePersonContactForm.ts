import { useForm, type FormApi } from '@tanstack/react-form';

import type {
  AddressInput,
  EmailInput,
  PersonInput,
  PhoneInput,
} from '#api/Operation.js';
import type { NameTuple } from './Field/NameField';

export type PersonInputFormApi = FormApi<PersonInputModel>;

export type PersonInputModel = {
  dob: Date | null;
  gender: string;
  name: NameTuple;
  addresses: AddressInput[];
  emails: EmailInput[];
  phones: PhoneInput[];
};

const emptyValue: PersonInputModel = {
  addresses: [],
  emails: [],
  phones: [],
  dob: null,
  name: ['', '', ''],
  gender: '',
};

export function usePersonContactForm(
  onSubmit: (value: PersonInput) => void
): FormApi<PersonInputModel> {
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
