import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  collectCoverageFrom: [
    '**/*.{ts,tsx}'
  ],
  coveragePathIgnorePatterns: [
    'node_modules',
    '<rootDir>/.*.stories.tsx$',
    'codegen.ts',
    '<rootDir>/.storybook/*',
    '<rootDir>/src/pages/*',
    '<rootDir>/src/test-utils/*',
  ],
  coverageReporters: [
    'html',
    'json',
    'json-summary',
    'text',
    'text-summary'
  ],
  moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
  },
  setupFiles: ['<rootDir>/jest.setup.js'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect', 
    'jest-axe/extend-expect',
    'react-intersection-observer/test-utils',
  ],
  testEnvironment: 'jest-environment-jsdom',
  testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx)$',
  testPathIgnorePatterns: ['<rootDir>/src/test-utils/*']
};

export default createJestConfig(customJestConfig);
