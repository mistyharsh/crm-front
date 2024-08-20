import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './schema.graphql',
  documents: ['src/api/**/*.gql'],
  emitLegacyCommonJSImports: false,
  generates: {
    'src/api/Operation.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        {
          'typed-document-node': {
            noExport: true,
          },
        },
        './script/Named.ts',
      ],
      config: {
        // documentMode: 'string',
        enumsAsTypes: true,
        // onlyOperationTypes: true,
        skipTypename: true,
        useTypeImports: true,
      },
    },
  },
};

export default config;
