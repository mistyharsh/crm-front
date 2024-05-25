import { Heading, View } from '@adobe/react-spectrum';
import { useQuery } from '@tanstack/react-query';
import { createRoute } from '@tanstack/react-router';

import { Page } from '../../../gen/Api';
import { client, graphql } from '../../../graphql';
import { mainRoute } from '../../mainRoute';
import { ContactList } from './ContactList';
import { FailedGettingContacts } from './ContactListStatus';

export const contactListRoute = createRoute({
  getParentRoute: () => mainRoute,
  path: '/contacts/$tenantId',
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
    <View
      data-cl='home'
      backgroundColor={'gray-75'}
      padding={'size-400'}
      width={'size-6000'}
      margin={'auto'}
      marginTop={'size-400'}
      borderColor={'gray-200'}
      borderWidth={'thin'}
    >
      <Heading level={2} marginBottom={'size-200'}>
        Contacts
      </Heading>
      {render()}
    </View>
  );
}
