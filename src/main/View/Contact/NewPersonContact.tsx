import { Stack, Title } from '@mantine/core';
import { useMutation } from '@tanstack/react-query';
import { createRoute } from '@tanstack/react-router';
import { BookUser } from 'lucide-react';

import { execute } from '#api/Client.js';
import type { PersonInput } from '#api/Operation.js';
import { workspaceRoute } from '../Workspace/WorkspaceRoute.js';
import { PersonContactForm } from './PersonContactForm.js';
import { usePersonContactForm } from './UsePersonContactForm.js';

export type NewPersonContactProps = {};

export const newPersonContactRoute = createRoute({
  getParentRoute: () => workspaceRoute,
  path: '/contacts/new/individual',
  component: NewPersonContact,
});

function useCreateContactPersonMutation(tenantId: string) {
  return useMutation({
    mutationFn: (input: PersonInput) =>
      execute('CreateContactPerson', { input, tenantId }),
  });
}

export function NewPersonContact(_props: NewPersonContactProps) {
  const { tenantId } = newPersonContactRoute.useParams();

  const contacts = useCreateContactPersonMutation(tenantId);
  const form = usePersonContactForm((value) => {
    contacts.mutate(value);
  });

  return (
    <Stack className='NewPersonContact'>
      <BookUser size={'3rem'} strokeWidth={1} />
      <Title order={1} children='New Contact Person' />
      <PersonContactForm form={form} />
    </Stack>
  );
}
