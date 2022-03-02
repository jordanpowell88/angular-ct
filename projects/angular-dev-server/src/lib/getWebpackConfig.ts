import { AngularWebpackPlugin } from "@ngtools/webpack";
import { Configuration } from "webpack";
import * as path from 'path';
import * as linkerPlugin from '@angular/compiler-cli/linker/babel';

export const getWebpackConfig = (tmpDir: string): Configuration => ({
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
        {
          test: /\.m?js$/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: [linkerPlugin],
              compact: false,
              cacheDirectory: true
            }
          }
        }
      ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new AngularWebpackPlugin({
            tsconfig: `${path.join(tmpDir, "/tsconfig.cy.json")}`
        }),
    ],
})