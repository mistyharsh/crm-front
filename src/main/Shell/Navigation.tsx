import { AppShellSection, Divider, ScrollArea, Title } from '@mantine/core';
import { useMatch } from '@tanstack/react-router';
import { Cog } from 'lucide-react';

import { ButtonAsLink } from '../Link.js';
import { WorkspaceSidebar } from './WorkspaceSidebar.js';

export type NavigationProps = {};

export function Navigation(props: NavigationProps) {
  const {} = props;

  // TODO: Fix for Storybook
  const match = useMatch({
    from: '/workspaces/$tenantId',
    shouldThrow: false,
  });

  const tenantId = match?.params.tenantId;

  return (
    <>
      {tenantId && (
        <AppShellSection p={'md'}>
          <ButtonAsLink
            to='/workspaces/$tenantId'
            params={{ tenantId }}
            variant='light'
            h={'auto'}
          >
            <Title order={1}>ClobWise</Title>
          </ButtonAsLink>
        </AppShellSection>
      )}

      <AppShellSection grow component={ScrollArea} p={'md'}>
        {tenantId && <WorkspaceSidebar tenantId={tenantId} />}
      </AppShellSection>

      <AppShellSection>
        <Divider />
      </AppShellSection>

      <AppShellSection p={'md'}>
        <ButtonAsLink
          to='/workspaces/$tenantId'
          params={{ tenantId: '' }}
          variant='light'
          leftSection={<Cog />}
          children='User Settings'
        />
      </AppShellSection>
    </>
  );
}
