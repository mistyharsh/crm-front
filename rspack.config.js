import HTMLWebpackPlugin from 'html-webpack-plugin';


export default function config(env) {
  const mode = env.production ? 'production' : 'development';

  /** @type {import('@rspack/cli').Configuration} */
  const config = {
    mode,
    entry: {
      main: './src/main.ts',
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
          test: /\.tsx$/,
          loader: 'builtin:swc-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: './index.html',
        scriptLoading: 'module',
      }),
    ],
    devServer: {
      historyApiFallback: true,
      hot: true,
      port: 8891,
    },
    experiments: {
      outputModule: true,
    },
  };

  return config;
}
