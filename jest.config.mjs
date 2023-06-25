import nextJest from 'next/jest.js';
import { pathsToModuleNameMapper } from 'ts-jest';

import { compilerOptions } from './tsconfig.json';

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
  roots: ['<rootDir>'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', 'jest-axe/extend-expect'],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx)$',
  testPathIgnorePatterns: ['<rootDir>/src/test-utils/*']
};

export default createJestConfig(customJestConfig);
