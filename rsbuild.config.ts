import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    rspack: {
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        extensionAlias: {
          '.js': ['.js', '.ts', '.tsx'],
        },
      },
    },
  },
});
