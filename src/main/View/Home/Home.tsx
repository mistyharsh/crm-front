import { Stack, Title } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { createRoute } from '@tanstack/react-router';

import { execute } from '#api/Client.js';
import { rootRoute } from '../../RootRoute.js';
import { TenantList } from './TenantList.js';

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  component: Home,
  path: '/',
});

function useTenantList() {
  return useQuery({
    queryKey: ['Tenants'],
    queryFn: () => execute('Tenants').then((data) => data.getMyTenants),
  });
}

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
