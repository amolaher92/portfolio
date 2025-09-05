import { Page, expect } from '@playwright/test';

export class TestHelpers {
  constructor(private page: Page) {}

  async navigateToHome() {
    await this.page.goto('/');
  }

  async getButton(testId: string) {
    return this.page.getByTestId(testId);
  }

  async expectButtonToBeVisible(testId: string) {
    const button = await this.getButton(testId);
    await expect(button).toBeVisible();
    return button;
  }

  async expectButtonToHaveText(testId: string, text: string) {
    const button = await this.getButton(testId);
    await expect(button).toHaveText(text);
    return button;
  }

  async expectButtonToHaveClass(testId: string, className: string) {
    const button = await this.getButton(testId);
    await expect(button).toHaveClass(new RegExp(className));
    return button;
  }
}
