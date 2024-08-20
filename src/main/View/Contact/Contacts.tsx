import { Heading, View } from '@adobe/react-spectrum';
import { useQuery } from '@tanstack/react-query';
import { createRoute } from '@tanstack/react-router';

import type { Page } from '#api/Operation.js';
import { workspaceRoute } from '../Workspace/WorkspaceRoute.js';
import { ContactList } from './ContactList.js';
import { FailedGettingContacts } from './ContactListStatus.js';
import { execute } from '#api/Client.js';

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
      padding={'size-400'}
      borderColor={'gray-200'}
      width={'size-9000'}
      backgroundColor={'gray-75'}
    >
      <Heading level={1} marginBottom={'size-200'}>
        Contacts
      </Heading>
      {render()}
    </View>
  );
}
