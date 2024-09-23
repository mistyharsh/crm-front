import { Outlet } from '@tanstack/react-router';

import type { Tenant } from '#api/Operation.js';
import { Shell } from '#shared/Shell/Shell.js';
import { AppHeader } from './AppHeader.js';
import { Navigation } from './Navigation.js';

export type AppShellProps = {
  tenants: Tenant[];

  /** Active tenant */
  tenant?: Tenant;
};

export function AppShell(props: AppShellProps) {
  const { tenant } = props;

  return (
    <Shell
      header={(_isOpen, open) => <AppHeader onOpen={open} />}
      sidebar={(_isOpen, _open, close) => (
        <Navigation tenant={tenant} onClose={close} />
      )}
      main={<Outlet />}
    />
  );
}
