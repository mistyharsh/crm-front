import { Flex, Heading, Link, View } from '@adobe/react-spectrum';
import { useQuery } from '@tanstack/react-query';
import { createRoute, useLinkProps } from '@tanstack/react-router';

import { execute } from '#api/Client.js';
import type { Page } from '#shared/gen/Api.js';
import { rootRoute } from '../../RootRoute.js';
import { newContactRoute } from '../Contact/NewOrgContact.js';
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

  const mainRouteHref = useLinkProps({ to: rootRoute.to }).href;
  const newContactHref = useLinkProps({
    to: newContactRoute.to,
    params: { tenantId },
  }).href;

  return (
    <View width={'size-3000'}>
      <View flex borderWidth={'thick'} borderRadius={'medium'}>
        <Flex
          direction={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Heading level={1}>Total Contacts</Heading>
          <Heading level={3}>{contacts.data?.getContacts.length}</Heading>
        </Flex>
      </View>
      <View>
        <Link href={mainRouteHref} marginEnd={'size-900'}>
          Go back
        </Link>
        <Link href={newContactHref}>New Contact</Link>
      </View>
    </View>
  );
}
