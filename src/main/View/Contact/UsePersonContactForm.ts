import { useForm, type FormApi } from '@tanstack/react-form';

import type {
  AddressInput,
  EmailInput,
  PersonInput,
  PhoneInput,
} from '#shared/gen/Api.js';

export type PersonInputFormApi = FormApi<PersonInputModel>;

export type PersonInputModel = {
  dob?: string | null;
  gender: string;
  familyName: string;
  givenName: string;
  middleName?: string | null;
  addresses: AddressInput[];
  emails: EmailInput[];
  phones: PhoneInput[];
};

const emptyValue: PersonInputModel = {
  addresses: [],
  emails: [],
  phones: [],
  dob: '',
  familyName: '',
  middleName: '',
  givenName: '',
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
      };

      onSubmit(toSubmit);
    },
  });
}
