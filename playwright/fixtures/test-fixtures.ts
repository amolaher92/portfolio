import { test as base } from '@playwright/test';
import { TestHelpers } from '../helpers/test-helpers';

// Declare the types of fixtures
interface TestFixtures {
  helpers: TestHelpers;
}

// Extend the base test with our fixtures
export const test = base.extend<TestFixtures>({
  helpers: async ({ page }, use) => {
    await use(new TestHelpers(page));
  },
});
