import { Box, Paper, Stack, Title } from '@mantine/core';
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
    <Paper
      withBorder
      className='Home'
      radius={'md'}
      maw={600}
      p={'md'}
      m={'lg'}
    >
      <Stack>
        <Title order={2} children='Select Workspace' />
        <TenantList tenants={tenantList} />
      </Stack>
    </Paper>
  );
}
