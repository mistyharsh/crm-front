import { useQuery } from '@tanstack/react-query';
import { createRoute } from '@tanstack/react-router';

import { client, graphql } from '../../../graphql';
import { mainRoute } from '../../mainRoute';
import { TenantList } from './TenantList';

export const homeRoute = createRoute({
  getParentRoute: () => mainRoute,
  component: Home,
  path: '/',
});

const query = graphql(`
  query TenantList {
    getTenants {
      id
      name
      description
    }
  }
`);

function useTenantList() {
  return useQuery({
    queryKey: ['tenantList'],
    queryFn: () => client.request(query).then((data) => data.getTenants),
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
    <div>
      <h1>Home</h1>
      <p>This is home route.</p>
      <TenantList tenants={tenantList} />
    </div>
  );
}
