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
],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testEnvironment: 'jest-environment-jsdom',
  testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx)$',
};

export default createJestConfig(customJestConfig);
