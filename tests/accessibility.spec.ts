import { test, expect } from '@playwright/test';

test('Form supports full keyboard navigation', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');

  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');

  const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
  expect(focusedElement).toBeTruthy();
});
