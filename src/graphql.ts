import { initGraphQLTada } from 'gql.tada';
import { GraphQLClient } from 'graphql-request';

import type { introspection } from './gen/graphql-env';

export const graphql = initGraphQLTada<{
  introspection: introspection;
}>();

export type { FragmentOf, ResultOf, VariablesOf } from 'gql.tada';
export { readFragment } from 'gql.tada';

export const client = new GraphQLClient('/api/graphql');
