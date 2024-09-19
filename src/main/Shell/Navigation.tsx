import {
  AppShellNavbar,
  AppShellSection,
  Avatar,
  Box,
  Button,
  Divider,
  Group,
  ScrollArea,
  Title,
  Tooltip,
} from '@mantine/core';
import { ArrowLeftRight } from 'lucide-react';

import type { Tenant } from '#api/Operation.js';
import { SchemeToggle } from '#base/SchemeToggle.js';
import { ButtonAsLink } from '../Link.js';
import { WorkspaceSidebar } from './WorkspaceSidebar.js';

export type NavigationProps = {
  tenant?: Tenant;
  onClose?: () => void;
};

export function Navigation(props: NavigationProps) {
  const { tenant, onClose } = props;
  const tenantId = tenant?.id;

  return (
    <AppShellNavbar>
      {tenant && (
        <AppShellSection p={'md'}>
          <Box>
            <Title order={1} fw={700} fz={'h4'} p={'sm'}>
              {tenant.name}
            </Title>
          </Box>
        </AppShellSection>
      )}

      <AppShellSection grow component={ScrollArea} p={'md'}>
        {tenantId && <WorkspaceSidebar tenantId={tenantId} />}
      </AppShellSection>

      <AppShellSection>
        <Divider />
      </AppShellSection>

      <AppShellSection p={'md'}>
        <Group wrap='nowrap'>
          <Tooltip label='Profile' color='gray.6'>
            <ButtonAsLink
              to='/workspaces/$tenantId'
              params={{ tenantId: '' }}
              variant='transparent'
              p={0}
            >
              <Avatar
                radius={'sm'}
                size={'md'}
                color='initials'
                name={'John Doe'}
              />
            </ButtonAsLink>
          </Tooltip>
          <Tooltip label='Change Workspace'>
            <ButtonAsLink to='/' variant='default' px={'sm'}>
              <ArrowLeftRight size={20} />
            </ButtonAsLink>
          </Tooltip>
          <SchemeToggle />
          <Button
            variant='default'
            px={'sm'}
            hiddenFrom='md'
            onClick={onClose}
            ml={'auto'}
          >
            Close
          </Button>
        </Group>
      </AppShellSection>
    </AppShellNavbar>
  );
}
