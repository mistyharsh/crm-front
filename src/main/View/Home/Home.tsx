import { Stack, Title } from '@mantine/core';
import { createRoute } from '@tanstack/react-router';

import { useTenantList } from '../../Data/UseTenant.js';
import { rootRoute } from '../../RootRoute.js';
import { TenantList } from './TenantList.js';

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  component: Home,
  path: '/',
});

export function Home() {
  const { data: tenantList, isLoading, isSuccess } = useTenantList();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isSuccess) {
    return <div>Error loading tenants</div>;
  }

  return (
    <Stack className='Home' maw={600} p={'md'} m={'lg'} bg={'gray.8'}>
      <Title order={2} children='Select Workspace' />
      <TenantList tenants={tenantList} />
    </Stack>
  );
}
