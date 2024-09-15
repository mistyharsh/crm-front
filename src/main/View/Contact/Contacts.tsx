import { Stack, Title } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { createRoute } from '@tanstack/react-router';

import { execute } from '#api/Client.js';
import type { Page } from '#api/Operation.js';
import { workspaceRoute } from '../Workspace/WorkspaceRoute.js';
import { ContactList } from './ContactList.js';
import { FailedGettingContacts } from './ContactListStatus.js';

export const contactListRoute = createRoute({
  getParentRoute: () => workspaceRoute,
  path: '/contacts',
  component: Contacts,
});

function useGetContactQuery(page: Page, tenantId: string) {
  return useQuery({
    queryKey: ['contacts', page, tenantId],
    queryFn: () => execute('GetContacts', { page, tenantId }),
  });
}

export function Contacts() {
  const { tenantId } = contactListRoute.useParams();
  const contacts = useGetContactQuery({ number: 0, size: 50 }, tenantId);

  const render = () => {
    if (contacts.isLoading) {
      return <Title order={2}>Loading....</Title>;
    } else if (contacts.isError) {
      return <FailedGettingContacts />;
    } else if (contacts.isSuccess) {
      return <ContactList contacts={contacts.data.getContacts} />;
    }
  };

  return (
    <Stack className='Contacts'>
      <Title order={1} children='Contacts' />
      {render()}
    </Stack>
  );
}
