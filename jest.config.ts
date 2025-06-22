import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  rootDir: './src',
  coverageProvider: 'v8',
  testEnvironment: 'node', // ← MongoDBテストではこちらが自然
  setupFilesAfterEnv: ['../jest.setup.ts'], // ✅ afterEnvのみに指定
  collectCoverage: true,
  coverageReporters: ['text', 'text-summary'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  transformIgnorePatterns: ['/node_modules/(?!jose)'],
};

export default createJestConfig(config);
