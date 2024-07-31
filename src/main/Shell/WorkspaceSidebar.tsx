import { Flex, Link } from '@adobe/react-spectrum';
import DashboardIcon from '@spectrum-icons/workflow/Dashboard';
import UsersIcon from '@spectrum-icons/workflow/User';
import ContactsIcon from '@spectrum-icons/workflow/UsersAdd';
import { useLinkProps, useParams } from '@tanstack/react-router';

import { contactListRoute } from '../View/Contact/Contacts.js';
import { userListRoute } from '../View/Tenant/Users.js';
import { dashboardRoute } from '../View/Workspace/Dashboard.js';

export function WorkspaceSidebar() {
  const { tenantId } = useParams({ from: '/workspaces/$tenantId' });

  // TODO: Better integration
  const dashboardHref = useLinkProps({
    to: dashboardRoute.to,
    params: { tenantId },
  }).href;

  const contactHref = useLinkProps({
    to: contactListRoute.to,
    params: { tenantId },
  }).href;

  const usersHref = useLinkProps({
    to: userListRoute.to,
    params: { tenantId },
  }).href;

  return (
    <Flex direction={'column'} gap={'size-200'}>
      <Flex alignItems='center' gap='size-100'>
        <DashboardIcon />
        <Link href={dashboardHref} variant='secondary' isQuiet>
          Dashboard
        </Link>
      </Flex>
      <Flex alignItems='center' gap='size-100'>
        <ContactsIcon />
        <Link href={contactHref} variant='secondary' isQuiet>
          Contacts
        </Link>
      </Flex>
      <Flex alignItems='center' gap='size-100'>
        <UsersIcon />
        <Link href={usersHref} variant='secondary' isQuiet>
          Users
        </Link>
      </Flex>
    </Flex>
  );
}
