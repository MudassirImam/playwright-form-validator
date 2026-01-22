import { test, expect } from '@playwright/test';
import { PracticeFormPage } from '../pages/practiceForm.page';

test.describe('Locator Strategy Validation', () => {
  test('Validate all critical locators are visible & enabled', async ({ page }) => {
    const form = new PracticeFormPage(page);
    await form.goto();

    await expect(form.firstName).toBeVisible();
    await expect(form.firstName).toBeEditable();

    await expect(form.genderMale).toBeVisible();
    await expect(form.submitButton).toBeEnabled();
  });
});
