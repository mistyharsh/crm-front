import { Heading, View } from '@adobe/react-spectrum';
import { useQuery } from '@tanstack/react-query';
import { createRoute } from '@tanstack/react-router';

import { client, graphql } from '#shared/graphql.js';
import { workspaceRoute } from '../Workspace/WorkspaceRoute.js';
import { UserList } from './UserList.js';
import { FailedGettingUsers } from './UsersListStatus.js';

export const userListRoute = createRoute({
  getParentRoute: () => workspaceRoute,
  path: '/users/',
  component: TenantUsers,
});

const getUsersQuery = graphql(`
  query GetUsers($tenantId: String!) {
    getUsers(tenantId: $tenantId) {
      firstName
      lastName
      id
    }
  }
`);

function usersQuery(tenantId: string) {
  return client.request({
    document: getUsersQuery,
    variables: {
      tenantId: tenantId,
    },
  });
}

function useGetUserQuery(tenantId: string) {
  return useQuery({
    queryKey: ['users', tenantId],
    queryFn: () => usersQuery(tenantId),
  });
}

export function TenantUsers() {
  const { tenantId } = userListRoute.useParams();

  const users = useGetUserQuery(tenantId);

  const render = () => {
    if (users.isLoading) {
      return <Heading level={2}>Loading....</Heading>;
    } else if (users.isError) {
      return <FailedGettingUsers />;
    } else if (users.isSuccess) {
      return <UserList users={users.data.getUsers} />;
    }
  };
  return (
    <View data-cl='home' width={'size-6000'}>
      <Heading level={2} marginBottom={'size-200'}>
        Users
      </Heading>
      {render()}
    </View>
  );
}
