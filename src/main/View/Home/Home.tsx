import { Heading, View } from '@adobe/react-spectrum';
import { useQuery } from '@tanstack/react-query';
import { createRoute } from '@tanstack/react-router';

import { client, graphql } from '#shared/graphql.js';
import { rootRoute } from '../../RootRoute.js';
import { TenantList } from './TenantList.js';

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  component: Home,
  path: '/',
});

const query = graphql(`
  query TenantList {
    getMyTenants {
      id
      name
      description
    }
  }
`);

function useTenantList() {
  return useQuery({
    queryKey: ['tenantList'],
    queryFn: () => client.request(query).then((data) => data.getMyTenants),
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
    <View
      data-cl='home'
      backgroundColor={'gray-75'}
      padding={'size-400'}
      width={'size-6000'}
      marginTop={'size-400'}
    >
      <Heading level={2} marginBottom={'size-200'}>
        Select Workspace
      </Heading>
      <TenantList tenants={tenantList} />
    </View>
  );
}
