import { AngularWebpackPlugin } from "@ngtools/webpack";
import * as fs from 'fs';
import { Configuration } from 'webpack';
import linkerPlugin from '@angular/compiler-cli/linker/babel';

type SpecPattern = string | string[];

const generateTsConfigContent = (specPattern: SpecPattern) => `
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/cy",
    "types": ["cypress"],
    "allowSyntheticDefaultImports": true
  },
  "include": ["src/**/*.d.ts", "${specPattern}"]
}
`

const generateTsConfig = (specPattern: SpecPattern): void => {
  const tsconfigContent = generateTsConfigContent(specPattern);
  fs.writeFileSync('tsconfig.cy.json', tsconfigContent);
}

const webpackConfig: Configuration = {
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
            tsconfig: './tsconfig.cy.json'
        }),
    ],
}

export default function generateWebpackConfig(specPattern: SpecPattern): Configuration {
  generateTsConfig(specPattern);
  return webpackConfig;
};