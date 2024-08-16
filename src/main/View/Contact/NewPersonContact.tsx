import { Flex, Heading, View } from '@adobe/react-spectrum';
import PersonalizationField from '@spectrum-icons/workflow/PersonalizationField';
import { useMutation } from '@tanstack/react-query';
import { createRoute } from '@tanstack/react-router';

import { execute } from '#api/Client.js';
import type { PersonInput } from '#shared/gen/Api.js';
import { workspaceRoute } from '../Workspace/WorkspaceRoute.js';
import { PersonContactForm } from './PersonContactForm.js';
import { usePersonContactForm } from './UsePersonContactForm.js';

export type NewPersonContactProps = {};

export const newPersonContactRoute = createRoute({
  getParentRoute: () => workspaceRoute,
  path: '/contacts/new/individual',
  component: NewPersonContact,
});

function useCreateContactPersonMutation(input: PersonInput, tenantId: string) {
  return useMutation({
    mutationFn: () => execute('CreateContactPerson', { input, tenantId }),
  });
}

export function NewPersonContact(_props: NewPersonContactProps) {
  const { tenantId } = newPersonContactRoute.useParams();

  const form = usePersonContactForm(() => {
    contacts.mutate();
  });

  const contacts = useCreateContactPersonMutation(form.state.values, tenantId);

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
          New Contact Person
        </Heading>
        <PersonContactForm form={form} />
      </Flex>
    </View>
  );
}
