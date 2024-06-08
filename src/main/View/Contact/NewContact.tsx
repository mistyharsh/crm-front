import { Flex, Heading, View } from '@adobe/react-spectrum';
import PersonalizationField from '@spectrum-icons/workflow/PersonalizationField';
import { createRoute } from '@tanstack/react-router';
import { useMutation } from '@tanstack/react-query';

import { useState } from 'react';

import type { OrganizationInput } from '#shared/gen/Api.js';
import { client, graphql } from '#shared/graphql.js';
import { workspaceRoute } from '../Workspace/WorkspaceRoute.js';
import { OrgContactForm } from './OrgContactForm.js';

export type NewContactProps = {};

export const newContactRoute = createRoute({
  getParentRoute: () => workspaceRoute,
  path: '/new-contact',
  component: NewContact,
});

const createContactOrganization = graphql(`
  mutation CreateContactOrg($input: OrganizationInput!, $tenantId: String!) {
    createContactOrganization(input: $input, tenantId: $tenantId) {
      addresses {
        house
        isPrimary
        landmark
        postalCodeId
        street
      }
      emails {
        address
        isPrimary
      }
      id
      name
      people {
        dob
        familyName
        givenName
        id
        middleName
      }
      phones {
        countryId
        isPrimary
        number
      }
    }
  }
`);

function createContactOrgMutation(input: OrganizationInput, tenantId: string) {
  return client.request({
    document: createContactOrganization,
    variables: {
      input,
      tenantId,
    },
  });
}

function useCreateContactOrgMutation(
  input: OrganizationInput,
  tenantId: string
) {
  return useMutation({
    mutationFn: () => createContactOrgMutation(input, tenantId),
  });
}

export function NewContact(_props: NewContactProps) {
  const [formData, setFormData] = useState<OrganizationInput>({
    addresses: [],
    emails: [],
    name: '',
    people: [],
    phones: [],
  });
  const { tenantId } = newContactRoute.useParams();

  const contacts = useCreateContactOrgMutation(formData, tenantId);

  const handleSubmit = () => {
    contacts.mutate();
  };

  return (
    <View
      data-cl={'newContact'}
      backgroundColor={'gray-75'}
      padding={'size-400'}
      margin={'auto'}
      width={'size-6000'}
      marginTop={'size-400'}
      borderColor={'gray-200'}
      borderWidth={'thin'}
    >
      <Flex direction={'column'}>
        <PersonalizationField
          size='XXL'
          alignSelf={'center'}
          marginBottom={'size-400'}
        />
        <Heading level={1} alignSelf={'self-start'}>
          New Contact Organizations
        </Heading>
        <OrgContactForm
          value={formData}
          onSubmit={handleSubmit}
          onInput={setFormData}
          tenantId={tenantId}
        />
      </Flex>
    </View>
  );
}
