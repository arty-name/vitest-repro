import { defineConfig } from 'vitest/config';

import angular from '@analogjs/vite-plugin-angular';

export default defineConfig(() => ({
  plugins: [angular({})],
  test: {
    maxWorkers: 1,
    setupFiles: ['src/test.ts'],
    environment: 'jsdom',
    include: ['src/**/*.spec.ts'],
  },
}));
