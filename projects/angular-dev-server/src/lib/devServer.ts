import { ResolvedDevServerConfig, startDevServer } from "@cypress/webpack-dev-server";
import * as webpackConfig from './webpack.config';

export function devServer(config: Cypress.DevServerConfig): Promise<ResolvedDevServerConfig> {
    return startDevServer({
        options: config,
        webpackConfig
    })
}