import { Heading, View } from '@adobe/react-spectrum';
import { useQuery } from '@tanstack/react-query';
import { createRoute } from '@tanstack/react-router';

import { client, graphql } from '../../../graphql';
import { mainRoute } from '../../mainRoute';
import { UserList } from './UserList';

export const tenantRoute = createRoute({
  getParentRoute: () => mainRoute,
  path: '/users/$tenantId',
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
  const { tenantId } = tenantRoute.useParams();

  const users = useGetUserQuery(tenantId);
  console.log('asdfs:- ', users);

  if (users.isLoading) return <>Help</>;

  if (users.isSuccess)
    return (
      <View
        data-cl='home'
        backgroundColor={'gray-75'}
        padding={'size-400'}
        width={'size-6000'}
        margin={'auto'}
        marginTop={'size-400'}
        borderColor={'gray-200'}
        borderWidth={'thin'}
      >
        <Heading level={2} marginBottom={'size-200'}>
          Tenants
        </Heading>
        <UserList users={users.data.getUsers} />
      </View>
    );
}