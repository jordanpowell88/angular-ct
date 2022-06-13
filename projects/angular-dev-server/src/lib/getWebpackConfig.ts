import { AngularWebpackPlugin } from "@ngtools/webpack";
import { Configuration } from "webpack";

export async function getWebpackConfig(tmpDir: string): Promise<Configuration> {
  return {
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
            test: /\.css$/,
            loader: 'raw-loader',
          },
          {
            test: /\.html$/,
            loader: 'raw-loader'
          },         
          { // Angular linker needed to link partial-ivy code
            // See https://angular.io/guide/creating-libraries#consuming-partial-ivy-code-outside-the-angular-cli
            test: /\.m?js$/,
            use: {
              loader: 'babel-loader',
              options: {
                plugins: ['@angular/compiler-cli/linker/babel'],
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
              tsconfig: `${tmpDir}/tsconfig.cy.json`,
              jitMode: true
          }),
      ],
    }
}