import { ResolvedDevServerConfig, devServer as startDevServer } from "@cypress/webpack-dev-server";
import { generateTsConfig } from "./generateTsConfig";
import { getWebpackConfig } from "./getWebpackConfig";
import { dirSync } from 'tmp';

export function devServer(cypressDevServerConfig: Cypress.DevServerConfig): Promise<ResolvedDevServerConfig> {
    const { config  } = cypressDevServerConfig;
    const { specPattern, projectRoot  } = config;
    
    // This creates a temporary directory used to store a tsconfig.cy.json file needed to construct the AngularWebpackPlugin
    const { name: tempDir } = dirSync()

    // This generates the tsconfig.cy.json file in the temporary directory from above
    generateTsConfig(specPattern, projectRoot, tempDir);
    
    return startDevServer(
        cypressDevServerConfig,
        { webpackConfig: getWebpackConfig(tempDir) }
    )
}