import { test, expect } from '@playwright/test';

test.describe('App Component', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the app before each test
    await page.goto('/');
  });

  test('should display correct heading', async ({ page }) => {
    const heading = page.getByRole('heading', { name: 'Vite + React' });
    await expect(heading).toBeVisible();
  });

  test('should increment counter when clicked', async ({ page }) => {
    // Get the counter button
    const button = page.getByRole('button', { name: /count is \d+/i });

    // Get initial count
    const initialText = await button.textContent();
    const initialCount = parseInt(initialText?.match(/\d+/)?.[0] ?? '0');

    // Click the button
    await button.click();

    // Verify count increased by 1
    await expect(button).toHaveText(`count is ${initialCount + 1}`);
  });

  test('should display both logos', async ({ page }) => {
    // Check Vite logo
    const viteLogo = page.getByRole('img', { name: 'Vite logo' });
    await expect(viteLogo).toBeVisible();

    // Check React logo
    const reactLogo = page.getByRole('img', { name: 'React logo' });
    await expect(reactLogo).toBeVisible();
  });

  test('should have working logo links', async ({ page }) => {
    // Check Vite link
    const viteLink = page.getByRole('link', { name: /vite/i });
    await expect(viteLink).toHaveAttribute('href', 'https://vite.dev');
    await expect(viteLink).toHaveAttribute('target', '_blank');

    // Check React link
    const reactLink = page.getByRole('link', { name: /react/i });
    await expect(reactLink).toHaveAttribute('href', 'https://react.dev');
    await expect(reactLink).toHaveAttribute('target', '_blank');
  });

  test('should display HMR instruction text', async ({ page }) => {
    const instruction = page.getByText(
      /Edit.*src\/App\.tsx.*and save to test HMR/
    );
    await expect(instruction).toBeVisible();
  });

  test('should display documentation link text', async ({ page }) => {
    const docText = page.getByText(
      'Click on the Vite and React logos to learn more'
    );
    await expect(docText).toBeVisible();
  });
});
