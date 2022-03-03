import { generateTsConfig, generateTsConfigContent } from "./generateTsConfig";

describe('generateTsConfig', () => {
  const projectRoot = '/blah/blah2';
  it('can generate a new tsConfigContent for a single specPattern', () => {
      // arrange
      const specPattern = `**/abcdefg`
      const expected = `
{
  "extends": "/blah/blah2/tsconfig.json",
  "compilerOptions": {
    "outDir": "/blah/blah2/out-tsc/cy",
    "types": ["/blah/blah2/node_modules/cypress"],
    "allowSyntheticDefaultImports": true
  },
  "include": ["/blah/blah2/src/**/*.d.ts","/blah/blah2/**/abcdefg"]
}
`

      // act
      const actual = generateTsConfigContent(specPattern, projectRoot);

      // assert
      
      expect(actual).toEqual(expected);

  })

  it('can generate a new tsConfigContent for an array of specPatterns', () => {
      // arrange
      const specPattern1 = '**/abcdefg'
      const specPattern2 = '**/stuvxyz'
      const specPattern3 = '123456789';
      const specPattern = [specPattern1, specPattern2, specPattern3];
      const expected = `
{
  "extends": "/blah/blah2/tsconfig.json",
  "compilerOptions": {
    "outDir": "/blah/blah2/out-tsc/cy",
    "types": ["/blah/blah2/node_modules/cypress"],
    "allowSyntheticDefaultImports": true
  },
  "include": ["/blah/blah2/src/**/*.d.ts","/blah/blah2/**/abcdefg","/blah/blah2/**/stuvxyz","/blah/blah2/123456789"]
}
`

      // act
      const actual = generateTsConfigContent(specPattern, projectRoot);

      // assert
      expect(actual).toEqual(expected);
  })
        
})