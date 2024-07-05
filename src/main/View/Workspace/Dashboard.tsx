import { Flex, Heading, Link, View } from '@adobe/react-spectrum';
import { useQuery } from '@tanstack/react-query';
import { createRoute, useLinkProps } from '@tanstack/react-router';

import type { Page } from '#shared/gen/Api.js';
import { client, graphql } from '#shared/graphql.js';
import { rootRoute } from '../../RootRoute.js';
import { newContactRoute } from '../Contact/NewContact.js';
import { workspaceRoute } from './WorkspaceRoute.js';

export const dashboardRoute = createRoute({
  getParentRoute: () => workspaceRoute,
  path: '/',
  component: Dashboard,
});

const getContacts = graphql(`
  query GetContacts($page: Page!, $tenantId: String!) {
    getContacts(page: $page, tenantId: $tenantId) {
      ... on ContactOrg {
        id
        name
      }

      ... on ContactPerson {
        id
        givenName
        familyName
        middleName
      }
    }
  }
`);

function getContactQuery(page: Page, tenantId: string) {
  return client.request({
    document: getContacts,
    variables: {
      page,
      tenantId,
    },
  });
}

function useGetContactQuery(page: Page, tenantId: string) {
  return useQuery({
    queryKey: ['contacts', page, tenantId],
    queryFn: () => getContactQuery(page, tenantId),
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
    <View margin={'size-500'}>
      <View flex borderWidth={'thick'} width={'25%'} borderRadius={'medium'}>
        <Flex
          direction={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          margin={'size-100'}
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
