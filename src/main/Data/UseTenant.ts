import { useQuery, type QueryClient } from '@tanstack/react-query';
import { useMatch } from '@tanstack/react-router';

import { execute, type Tenant } from '#api/Client.js';

const TENANT_KEY = ['Tenants'];
const EMPTY_LIST: Tenant[] = [];
const HOUR_MS = 1000 * 60 * 60;

export function setEmptyList(client: QueryClient) {
  client.prefetchQuery({
    queryKey: TENANT_KEY,
    queryFn: () => EMPTY_LIST,
  });
}

export function useTenantList() {
  return useQuery({
    initialData: EMPTY_LIST,
    initialDataUpdatedAt: Date.now() - HOUR_MS,
    queryKey: TENANT_KEY,
    queryFn: () => execute('Tenants').then((data) => data.getMyTenants),
  });
}

export function useActiveTenant(): Tenant | undefined {
  const { data: tenants } = useTenantList();

  const match = useMatch({
    from: '/workspaces/$tenantId',
    shouldThrow: false,
  });

  const active = tenants.find((tenant) => tenant.id === match?.params.tenantId);

  return active;
}
