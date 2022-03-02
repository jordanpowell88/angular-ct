import * as fs from 'fs';

type SpecPattern = string | string[];

const generateTsConfigContent = (specPattern: SpecPattern, projectRoot: string) => `
{
  "extends": "${projectRoot}/tsconfig.json",
  "compilerOptions": {
    "outDir": "${projectRoot}/out-tsc/cy",
    "types": ["${projectRoot}/node_modules/cypress"],
    "allowSyntheticDefaultImports": true
  },
  "include": ["${projectRoot}/src/**/*.d.ts", "${projectRoot}/${specPattern}"]
}
`

export const generateTsConfig = (specPattern: SpecPattern, projectRoot: string): void => {
  const tsconfigContent = generateTsConfigContent(specPattern, projectRoot);
  fs.writeFileSync('/tmp/tsconfig.cy.json', tsconfigContent);
}
