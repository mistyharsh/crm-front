export type { FragmentOf, ResultOf, VariablesOf } from 'gql.tada';
import { initGraphQLTada } from 'gql.tada';
export { readFragment } from 'gql.tada';
import { GraphQLClient } from 'graphql-request';

import type { introspection } from './gen/graphql-env';

export const graphql = initGraphQLTada<{
  introspection: introspection;
}>();


const GRAPHQL_URL = new URL('/api/graphql', window.origin);

export const client = new GraphQLClient(GRAPHQL_URL.toString());
