import path from 'node:path';

import HTMLWebpackPlugin from 'html-webpack-plugin';

const PORT = 8891;
const BACKEND = 'http://localhost:8890';

export default function config(env) {
  const mode = env.production ? 'production' : 'development';

  /** @type {import('@rspack/cli').Configuration} */
  const config = {
    mode,
    entry: {
      main: './src/main/Main.ts',
      public: './src/public/Public.ts',
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
      extensionAlias: {
        '.js': ['.js', '.ts', '.tsx'],
      },
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
        htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
        rewrites: [
          { from: /^\/public/, to: '/public.html' },
          { from: /./, to: '/index.html' },
        ],
      },

      // Backend routes.
      proxy: [
        {
          context: ['/api', '/auth'],
          target: BACKEND,
          changeOrigin: true,
        },
      ],

      setupMiddlewares(middlewares, _devServer) {
        middlewares.unshift({
          name: 'auth-check-middleware',
          async middleware(req, res, next) {
            const hasExtension = !!path.extname(req.path);
            const isPublic = req.path.startsWith('/public');

            if (hasExtension || isPublic) {
              // Request is for a file or public app route.
              // No need to check authentication.
              next();
            } else {
              // Request is for a main/protected app route.
              // TODO: Make a real authentication check.
              next();
            }
          },
        });

        return middlewares;
      },
    },
    experiments: {
      outputModule: true,
    },
  };

  return config;
}
