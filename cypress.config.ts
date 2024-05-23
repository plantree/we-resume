import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:6543',
    specPattern: 'cypress/tests/*.spec.{ts,tsx}',
    video: false,
    viewportWidth: 1280,
    viewportHeight: 720,
    supportFile: 'cypress/support/e2e.ts'
  }
});
