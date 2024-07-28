import { useForm, type FormApi } from '@tanstack/react-form';
import type {
  AddressInput,
  EmailInput,
  OrganizationInput,
  PersonInput,
  PhoneInput,
} from '#shared/gen/Api.js';

export type OrgInputFormApi = FormApi<OrganizationInputModel>;

export type OrganizationInputModel = {
  addresses: AddressInput[];
  emails: EmailInput[];
  name: string;
  people: PersonInput[];
  phones: PhoneInput[];
};

const emptyValue: OrganizationInputModel = {
  addresses: [],
  emails: [],
  name: '',
  people: [],
  phones: [],
};

export function useOrgContactForm(
  onSubmit: (value: OrganizationInput) => void
): FormApi<OrganizationInputModel> {
  return useForm<OrganizationInputModel>({
    defaultValues: emptyValue,
    onSubmit: ({ value }) => {
      const toSubmit: OrganizationInput = {
        ...value,
      };

      onSubmit(toSubmit);
    },
  });
}
