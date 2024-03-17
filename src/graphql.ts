import { initGraphQLTada } from 'gql.tada';

import type { introspection } from './graphql-env';
import { GraphQLClient } from 'graphql-request';

export const graphql = initGraphQLTada<{
  introspection: introspection;
}>();

export type { FragmentOf, ResultOf, VariablesOf } from 'gql.tada';
export { readFragment } from 'gql.tada';


export const client = new GraphQLClient('/api/graphql');
