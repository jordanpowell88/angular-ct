import { AngularWebpackPlugin } from '@ngtools/webpack';
import { WebpackConfigurationWithDevServer } from '@cypress/webpack-dev-server/dist/startServer';

export default function generateWebpackConfig(tsconfig: string): WebpackConfigurationWithDevServer {
  return {
    devServer: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.[jt]sx?$/,
            loader: '@ngtools/webpack',
          },
          {
            test: /(\.scss|\.sass)$/,
            use: ['raw-loader', 'sass-loader'],
          },
        ],
      },
      resolve: {
        extensions: ['.ts', '.js'],
      },
      plugins: [
        new AngularWebpackPlugin({
          tsconfig,
        }),
      ],
    }
  }
};
