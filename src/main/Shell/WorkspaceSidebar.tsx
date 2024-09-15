import { Stack } from '@mantine/core';
import { Castle, ContactRound, LayoutDashboard, Users } from 'lucide-react';

import { ButtonAsLink, type ButtonAsLinkProps } from '../Link.js';

export type WorkspaceSidebarProps = {
  tenantId: string;
};

const linkProps: ButtonAsLinkProps = {
  variant: 'subtle',
  justify: 'start',
  color: 'gray',
};

export function WorkspaceSidebar(props: WorkspaceSidebarProps) {
  const { tenantId } = props;

  return (
    <Stack gap={'md'}>
      <ButtonAsLink
        to='/workspaces/$tenantId'
        params={{ tenantId }}
        leftSection={<LayoutDashboard size={18} />}
        children='Dashboard'
        {...linkProps}
      />

      <ButtonAsLink
        to='/workspaces/$tenantId/contacts'
        params={{ tenantId }}
        leftSection={<Castle size={18} />}
        children='Customers'
        {...linkProps}
      />

      <ButtonAsLink
        to='/workspaces/$tenantId/contacts'
        params={{ tenantId }}
        leftSection={<ContactRound size={18} />}
        children='People'
        {...linkProps}
      />

      <ButtonAsLink
        to='/workspaces/$tenantId/users'
        params={{ tenantId }}
        leftSection={<Users size={18} />}
        children='Users'
        {...linkProps}
      />
    </Stack>
  );
}
