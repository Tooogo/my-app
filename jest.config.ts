import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  rootDir: './src',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['../jest.setup.ts'],
  collectCoverage: true,
  coverageReporters: ['text', 'text-summary'],
  coveragePathIgnorePatterns: [
  '\\.d\\.ts$',
  '<rootDir>/types/',
  '<rootDir>/i18n/routing.ts',
  '<rootDir>/i18n/request.ts',
  '<rootDir>/lib/mongodb.ts',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1', // ✅ src/を追加しない！
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  transform: {
    '^.+\\.ts$': ['ts-jest', { useESM: true }],
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(bson|mongodb|@mongodb-js)/)',
  ],

};

export default createJestConfig(config);