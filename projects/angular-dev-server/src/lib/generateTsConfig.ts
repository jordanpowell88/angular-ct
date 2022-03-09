import { writeFileSync } from 'fs';
import { join } from 'path';

type SpecPattern = string | string[];

export const generateTsConfigContent = (specPattern: SpecPattern, projectRoot: string): string => {

  const getFilePath = (fileName: string): string => join(projectRoot, fileName);

  const getIncludePaths = (): string[] => {
    if (Array.isArray(specPattern)) {
      return [...specPattern.map(sp => getFilePath(sp))]
    }

    if (typeof specPattern === 'string') {
      return [getFilePath(specPattern)]
    }

    return []
  }
  
return `
{
  "extends": "${getFilePath('tsconfig.json')}",
  "compilerOptions": {
    "outDir": "${getFilePath('out-tsc/cy')}",
    "types": ["${getFilePath('node_modules/cypress')}"],
    "allowSyntheticDefaultImports": true
  },
  "include": [${getIncludePaths().map(x => `"${x}"`)}]
}
`
}

export const generateTsConfig = (specPattern: SpecPattern, projectRoot: string, tempDir: string): void => {
  const tsconfigContent = generateTsConfigContent(specPattern, projectRoot);
  writeFileSync(`${tempDir}/tsconfig.cy.json`, tsconfigContent);
}
