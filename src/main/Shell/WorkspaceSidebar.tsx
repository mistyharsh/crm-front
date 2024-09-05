import { Flex, Text } from '@adobe/react-spectrum';
import UsersIcon from '@spectrum-icons/workflow/User';

import { LCastle, LContactRound, LLayoutDashboard } from '#shared/Icons.js';
import { AppLink } from '../Link.js';

export type WorkspaceSidebarProps = {
  tenantId: string;
};

export function WorkspaceSidebar(props: WorkspaceSidebarProps) {
  const { tenantId } = props;

  return (
    <Flex direction={'column'} gap={'size-200'} flex={true} margin={'size-200'}>
      <AppLink
        to='/workspaces/$tenantId'
        params={{ tenantId }}
        variant='primary'
      >
        <LLayoutDashboard />
        <Text>Dashboard</Text>
      </AppLink>

      <AppLink
        to='/workspaces/$tenantId/contacts'
        params={{ tenantId }}
        variant='primary'
      >
        <LCastle />
        <Text>Customers</Text>
      </AppLink>

      <AppLink
        to='/workspaces/$tenantId/contacts'
        params={{ tenantId }}
        variant='primary'
      >
        <LContactRound />
        <Text>People</Text>
      </AppLink>

      <AppLink
        to='/workspaces/$tenantId/users'
        params={{ tenantId }}
        variant='primary'
      >
        <UsersIcon />
        <Text>Users</Text>
      </AppLink>
    </Flex>
  );
}
