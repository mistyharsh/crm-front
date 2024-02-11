import HTMLWebpackPlugin from 'html-webpack-plugin';

const PORT = 8891;
const BACKEND = 'http://localhost:8890';

export default function config(env) {
  const mode = env.production ? 'production' : 'development';

  /** @type {import('@rspack/cli').Configuration} */
  const config = {
    mode,
    entry: {
      main: './src/Main.tsx',
      public: './src/Public.tsx',
    },
    output: {
      clean: true,
      path: './dist',
      module: true,
    },
    target: 'web',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              transform: {
                react: {
                  runtime: 'automatic',
                },
              },
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
      // App behind authentication.
      new HTMLWebpackPlugin({
        template: './index.html',
        filename: 'index.html',
        scriptLoading: 'module',
        chunks: ['main'],
      }),

      // App without authentication.
      new HTMLWebpackPlugin({
        template: './index.html',
        filename: 'public.html',
        scriptLoading: 'module',
        chunks: ['public'],
      }),
    ],
    devServer: {
      hot: true,
      port: PORT,

      // Frontend routes.
      historyApiFallback: {
        rewrites: [
          { from: /^\/public/, to: '/public.html' },
          { from: /./, to: '/index.html' },
        ],
      },

      // Backend routes.
      proxy: {
        '/api': {
          target: BACKEND,
          changeOrigin: true,
        },
        '/auth': {
          target: BACKEND,
          changeOrigin: true,
        },
      },
    },
    experiments: {
      outputModule: true,
    },
  };

  return config;
}
