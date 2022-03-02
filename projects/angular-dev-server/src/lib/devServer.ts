import { ResolvedDevServerConfig, devServer as startDevServer } from "@cypress/webpack-dev-server";
import { generateTsConfig } from "./generateWebpackConfig";
import { webpackConfig } from "./webpack.config";


export function devServer(cypressDevServerConfig: Cypress.DevServerConfig): Promise<ResolvedDevServerConfig> {
    console.log(cypressDevServerConfig)
    const { config  } = cypressDevServerConfig;
    const { specPattern, projectRoot  } = config;
    generateTsConfig(specPattern, projectRoot);
    
    return startDevServer(
        cypressDevServerConfig,
        { webpackConfig }
    )
}