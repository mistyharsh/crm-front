import { Stack, Title } from '@mantine/core';
import { useMutation } from '@tanstack/react-query';
import { createRoute } from '@tanstack/react-router';
import { Castle } from 'lucide-react';

import { execute, type OrganizationInput } from '#api/Client.js';
import { workspaceRoute } from '../Workspace/WorkspaceRoute.js';
import { OrgContactForm } from './OrgContactForm.js';
import { useOrgContactForm } from './UseOrgContactForm.js';

export type NewOrgContactProps = {};

export const newContactRoute = createRoute({
  getParentRoute: () => workspaceRoute,
  path: '/contacts/new/organization',
  component: NewOrgContact,
});

function useCreateOrg(input: OrganizationInput, tenantId: string) {
  return useMutation({
    mutationFn: () => execute('CreateContactOrg', { input, tenantId }),
  });
}

export function NewOrgContact(_props: NewOrgContactProps) {
  const { tenantId } = newContactRoute.useParams();

  const form = useOrgContactForm(() => {
    contacts.mutate();
  });

  const contacts = useCreateOrg(form.state.values, tenantId);

  return (
    <Stack className={'NewOrgContact'}>
      <Castle size='3rem' />
      <Title order={1} children='New Contact Organization' />
      <OrgContactForm form={form} />
    </Stack>
  );
}
