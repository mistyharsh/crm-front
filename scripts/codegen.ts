import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './schema.graphql',
  generates: {
    './src/gen/Api.ts': {
      plugins: ['typescript'],
      config: {
        enumsAsTypes: true,
        skipTypename: true,
        extractAllFieldsToTypes: true,
      },
    },
  },
};

export default config;
