import { test, expect } from '@playwright/test';
import { PracticeFormPage } from '../pages/practiceForm.page';

test.describe('Advanced Input Actions', () => {
  test('Keyboard navigation & auto-suggest subjects', async ({ page }) => {
    const form = new PracticeFormPage(page);
    await form.goto();

    await form.firstName.focus();
    await page.keyboard.type('Mudassir');
    await page.keyboard.press('Tab');

    await page.keyboard.type('Imam');
    await page.keyboard.press('Tab');

    await page.keyboard.type('mudassir@test.com');

    // Subjects auto-suggest
    await form.subjectsInput.type('Ma');
    await page.keyboard.press('Enter');

    await expect(page.locator('.subjects-auto-complete__multi-value'))
      .toContainText('Maths');
  });

  test('File upload validation', async ({ page }) => {
    const form = new PracticeFormPage(page);
    await form.goto();

    await form.uploadPicture.setInputFiles('tests/assets/sample.png');

    await expect(form.uploadPicture).not.toBeEmpty();
  });
});
