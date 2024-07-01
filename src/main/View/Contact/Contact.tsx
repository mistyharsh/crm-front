import { Flex, Heading, View } from '@adobe/react-spectrum';
import { useQuery } from '@tanstack/react-query';
import { createRoute } from '@tanstack/react-router';

import type { Page } from '#shared/gen/Api.js';
import { client, graphql } from '#shared/graphql.js';
import { workspaceRoute } from '../Workspace/WorkspaceRoute.js';
import { ContactList } from './ContactList.js';
import { FailedGettingContacts } from './ContactListStatus.js';
import { Sidebar } from '../../../Shell/Sidebar.js';

export const contactListRoute = createRoute({
  getParentRoute: () => workspaceRoute,
  path: '/contacts',
  component: Contacts,
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

export function Contacts() {
  const { tenantId } = contactListRoute.useParams();

  const contacts = useGetContactQuery({ number: 0, size: 50 }, tenantId);

  const render = () => {
    if (contacts.isLoading) {
      return <Heading level={2}>Loading....</Heading>;
    } else if (contacts.isError) {
      return <FailedGettingContacts />;
    } else if (contacts.isSuccess) {
      return <ContactList contacts={contacts.data?.getContacts} />;
    }
  };

  return (
    <Flex>
      <Sidebar />
      <View
        data-cl='home'
        padding={'size-400'}
        borderColor={'gray-200'}
        width={'100%'}
      >
        <Heading level={2} marginBottom={'size-200'}>
          Contacts
        </Heading>
        {render()}
      </View>
    </Flex>
  );
}
