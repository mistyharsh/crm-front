import { Paper, Stack, Title } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { createRoute } from '@tanstack/react-router';

import { execute } from '#api/Client.js';
import type { Page } from '#api/Operation.js';
import { workspaceRoute } from './WorkspaceRoute.js';

export const dashboardRoute = createRoute({
  getParentRoute: () => workspaceRoute,
  path: '/',
  component: Dashboard,
});

function useGetContactQuery(page: Page, tenantId: string) {
  return useQuery({
    queryKey: ['contacts', page, tenantId],
    queryFn: () => execute('GetContacts', { page, tenantId }),
  });
}

export function Dashboard() {
  const { tenantId } = dashboardRoute.useParams();
  const contacts = useGetContactQuery({ number: 0, size: 50 }, tenantId);

  return (
    <Stack className='Dashboard'>
      <Paper maw={300}>
        <Stack>
          <Title order={1}>Total Contacts</Title>
          <Title order={3}>{contacts.data?.getContacts.length}</Title>
        </Stack>
      </Paper>
    </Stack>
  );
}
