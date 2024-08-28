import { Flex, Link } from '@adobe/react-spectrum';
import DashboardIcon from '@spectrum-icons/workflow/Dashboard';
import UsersIcon from '@spectrum-icons/workflow/User';
import ContactsIcon from '@spectrum-icons/workflow/UsersAdd';
import { useParams } from '@tanstack/react-router';

import { contactListRoute } from '../View/Contact/Contacts.js';
import { userListRoute } from '../View/Tenant/Users.js';
import { dashboardRoute } from '../View/Workspace/Dashboard.js';

export function WorkspaceSidebar() {
  const { tenantId } = useParams({ from: '/workspaces/$tenantId' });

  return (
    <Flex direction={'column'} gap={'size-200'}>
      <Flex alignItems='center' gap='size-100'>
        <DashboardIcon />
        <Link
          href={{ to: dashboardRoute.to, params: { tenantId } }}
          variant='secondary'
          isQuiet
        >
          Dashboard
        </Link>
      </Flex>
      <Flex alignItems='center' gap='size-100'>
        <ContactsIcon />
        <Link
          href={{
            to: contactListRoute.to,
            params: { tenantId },
          }}
          routerOptions={{}}
          variant='secondary'
          isQuiet
        >
          Contacts
        </Link>
      </Flex>
      <Flex alignItems='center' gap='size-100'>
        <UsersIcon />
        <Link
          href={{
            to: userListRoute.to,
            params: { tenantId },
          }}
          routerOptions={{ replace: true }}
          variant='secondary'
          isQuiet
        >
          Users
        </Link>
      </Flex>
    </Flex>
  );
}
