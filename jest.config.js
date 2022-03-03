module.exports = {
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/app/core/$1',
  },
  // preset: 'jest-preset-angular',
  // setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  // transformIgnorePatterns: ['node_modules/(?!(jest-test|@ngrx))'],

  resolver: 'jest-preset-angular/build/resolvers/ng-jest-resolver.js',
  transformIgnorePatterns: ['node_modules/(?!@angular)', 'node_modules/(?!(jest-test|@ngrx))'],
  transform: {
    '^.+\\.(ts|js|mjs|html|svg)$': 'jest-preset-angular',
  },
};
