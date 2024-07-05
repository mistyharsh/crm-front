import { Flex, View, Heading, Link } from '@adobe/react-spectrum';
import DashboardIcon from '@spectrum-icons/workflow/Dashboard';
import ContactsIcon from '@spectrum-icons/workflow/UsersAdd';
import UsersIcon from '@spectrum-icons/workflow/User';
import { useLinkProps, useMatchRoute } from '@tanstack/react-router';

import { contactListRoute } from '../main/View/Contact/Contact.js';
import { homeRoute } from '../main/View/Home/Home.js';
import { userListRoute } from '../main/View/Tenant/Users.js';
import { dashboardRoute } from '../main/View/Workspace/Dashboard.js';

function setTenantId(
  dash: false | Record<'tenantId', string>,
  contact: false | (Record<'tenantId', string> & Record<never, string>),
  users: false | (Record<'tenantId', string> & Record<never, string>)
): string {
  if (dash) return dash.tenantId;
  if (contact) return contact.tenantId;
  return users.tenantId;
}

export function Sidebar() {
  const matchRoute = useMatchRoute();
  const home = matchRoute({ to: '/' });
  const dashboardParam = matchRoute({ to: '/workspaces/$tenantId' });
  const contactParam = matchRoute({ to: '/workspaces/$tenantId/contacts' });
  const userParam = matchRoute({ to: '/workspaces/$tenantId/users' });

  const tenantId = setTenantId(dashboardParam, contactParam, userParam);

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
  const homeHref = useLinkProps({
    to: homeRoute.to,
  }).href;

  const render = () => {
    if (home) {
      return (
        <Flex direction='column' gap='size-200'>
          <Link href={homeHref} variant='secondary' isQuiet>
            <Heading level={1}>ClobWise</Heading>
          </Link>{' '}
        </Flex>
      );
    }
    return (
      <Flex direction='column' gap='size-200'>
        <Link href={homeHref} variant='secondary' isQuiet>
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
    );
  };

  return (
    <View padding={'size-300'} height={'100vh'} backgroundColor='gray-100'>
      {render()}
    </View>
  );
}
