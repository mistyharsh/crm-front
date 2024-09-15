import { Flex, Heading, View } from '@adobe/react-spectrum';
import PersonalizationField from '@spectrum-icons/workflow/PersonalizationField';
import { useMutation } from '@tanstack/react-query';
import { createRoute } from '@tanstack/react-router';

import { execute } from '#api/Client.js';
import type { PersonInput } from '#api/Operation.js';
import { workspaceRoute } from '../Workspace/WorkspaceRoute.js';
import { PersonContactForm } from './PersonContactForm.js';
import { usePersonContactForm } from './UsePersonContactForm.js';
import { Stack } from '@mantine/core';
import { BookUser } from 'lucide-react';

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
    <Stack className='NewPersonContact'>
      <BookUser size={'3rem'} strokeWidth={1} />
      <Heading level={1} alignSelf={'self-start'}>
        New Contact Person
      </Heading>
      <PersonContactForm form={form} />
    </Stack>
  );
}
