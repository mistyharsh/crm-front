import {
  AppShellNavbar,
  AppShellSection,
  Divider,
  ScrollArea,
  Title,
} from '@mantine/core';

import type { Tenant } from '#api/Operation.js';
import { BottomBar } from './BottomBar.js';
import { WorkspaceSidebar } from './WorkspaceSidebar.js';
import style from './Shell.module.css';

export type NavigationProps = {
  tenant?: Tenant;
  onClose?: () => void;
};

export function Navigation(props: NavigationProps) {
  const { tenant, onClose } = props;
  const tenantId = tenant?.id;

  return (
    <AppShellNavbar className={style.navigation}>
      {tenant && (
        <AppShellSection>
          <Title className={style.title} order={1} p={'md'} fw={700} fz={'h3'} textWrap='nowrap'>
            {tenant.name}
          </Title>
          <Divider />
        </AppShellSection>
      )}

      <AppShellSection grow component={ScrollArea} p={'md'}>
        {tenantId && <WorkspaceSidebar tenantId={tenantId} />}
      </AppShellSection>

      <AppShellSection>
        <Divider />
      </AppShellSection>

      <AppShellSection p={'md'}>
        <BottomBar onClose={onClose} />
      </AppShellSection>
    </AppShellNavbar>
  );
}
