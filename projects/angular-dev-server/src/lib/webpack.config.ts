import * as path from 'path';
import { AngularWebpackPlugin } from '@ngtools/webpack';

module.exports = {
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
      tsconfig: path.join(__dirname, '../../tsconfig.cy.json'),
    }),
  ],
};
