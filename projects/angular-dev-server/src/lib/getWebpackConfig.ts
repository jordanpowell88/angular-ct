import { AngularWebpackPlugin } from "@ngtools/webpack";
import { Configuration } from "webpack";

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
    ],
  },
  resolve: {
      extensions: ['.ts', '.js'],
  },
  plugins: [
      new AngularWebpackPlugin({
          tsconfig: `${tmpDir}/tsconfig.cy.json`
      }),
  ],
})