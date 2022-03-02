import { ResolvedDevServerConfig, devServer as startDevServer } from "@cypress/webpack-dev-server";
import generateWebpackConfig from "./generateWebpackConfig";

export function devServer(cypressDevServerConfig: Cypress.DevServerConfig): Promise<ResolvedDevServerConfig> {
    const { config  } = cypressDevServerConfig;
    const { specPattern } = config;
    const webpackConfig = generateWebpackConfig(specPattern);
    
    return startDevServer(
        cypressDevServerConfig,
        { webpackConfig }
    )
}