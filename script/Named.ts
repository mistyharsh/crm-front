import { capitalCase } from 'change-case-all';
import { concatAST, GraphQLSchema } from 'graphql';
import {
  oldVisit,
  PluginFunction,
  Types,
} from '@graphql-codegen/plugin-helpers';

// Shamelessly copied from `@graphql-codegen/named-operations-object`
export interface PluginConfig {}

const suffixes = {
  query: 'Document',
  mutation: 'Document',
  subscription: '',
  fragment: 'FragmentDoc',
};

export const plugin: PluginFunction<PluginConfig, string> = (
  schema: GraphQLSchema,
  documents: Types.DocumentFile[],
  config: PluginConfig
) => {
  const allAst = concatAST(documents.map((v) => v.document) as any);
  const allOperationsNames: Record<
    'query' | 'mutation' | 'subscription' | 'fragment',
    Set<string>
  > = {
    query: new Set(),
    mutation: new Set(),
    subscription: new Set(),
    fragment: new Set(),
  };

  const duplicateOperationNames = [];

  oldVisit(allAst, {
    enter: {
      OperationDefinition: (node) => {
        if (node.name?.value) {
          if (allOperationsNames[node.operation].has(node.name.value)) {
            // @ts-ignore
            duplicateOperationNames.push(node.name.value);
            return;
          }
          allOperationsNames[node.operation].add(node.name.value);
        }
      },
      FragmentDefinition: (node) => {
        allOperationsNames.fragment.add(node.name.value);
      },
    },
  });

  if (duplicateOperationNames.length > 0) {
    throw new Error(
      `Duplicated operation name(s): ${duplicateOperationNames.join(', ')}`
    );
  }

  const objectItems = Object.keys(allOperationsNames)
    .map((operationType) => {
      const relevantOperations: Set<string> = allOperationsNames[operationType];
      const suffix = suffixes[operationType];

      if (relevantOperations && relevantOperations.size > 0) {
        const rootFieldName = capitalCase(operationType);

        return `export const ${rootFieldName} = {
          ${Array.from(relevantOperations)
            .map((t) => `    ${t}: ${t}${suffix}`)
            .join(',\n')}
          }`;
      }

      return null;
    })
    .filter(Boolean);

  const all = 'export const Operations = { ...Query, ...Mutation };'

  return '\n' + objectItems.join(';\n\n') + ';\n\n' + all;
};
