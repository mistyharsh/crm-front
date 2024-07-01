import { Flex, View, Heading, Link } from '@adobe/react-spectrum';
import DashboardIcon from '@spectrum-icons/workflow/Dashboard';
import ContactsIcon from '@spectrum-icons/workflow/UsersAdd';
import UsersIcon from '@spectrum-icons/workflow/User';
import { useLinkProps, useParams } from '@tanstack/react-router';

import { contactListRoute } from '../main/View/Contact/Contact.js';
import { userListRoute } from '../main/View/Tenant/Users';
import { dashboardRoute } from '../main/View/Workspace/Dashboard';

export function Sidebar() {
  const params = useParams({ from: '/workspaces/$tenantId' });
  const tenantId = params.tenantId;

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
    <View
      width='size-3000'
      marginEnd={'size-300'}
      padding={'size-300'}
      height={'100vh'}
      backgroundColor='gray-50'
    >
      <Flex direction='column' gap='size-200'>
        <Link href='/' variant='secondary' isQuiet>
          <Heading level={1}>ClobWise</Heading>
        </Link>
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
    </View>
  );
}
