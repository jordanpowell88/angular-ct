import { ResolvedDevServerConfig, startDevServer } from "@cypress/webpack-dev-server";
import generateWebpackConfig from "./webpack.config";

export function devServer(options: Cypress.DevServerConfig, cypressConfig: { tsconfig: string }, ): Promise<ResolvedDevServerConfig> {
    const webpackConfig = generateWebpackConfig('../../../../tsconfig.cy.json');
    
    return startDevServer({
        options,
        webpackConfig
    })
}