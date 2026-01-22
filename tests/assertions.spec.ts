import { test, expect } from '@playwright/test';
import { PracticeFormPage } from '../pages/practiceForm.page';
import {user} from '../test-data/users.json';

test('Successful submission validates modal test-data', async ({ page }) => {
  const form = new PracticeFormPage(page);
  await form.goto();

  await form.fillBasicDetails(user.validUser);
  await form.submitForm();

  await form.verifySubmissionSuccess();

  await expect(page.locator('td')).toContainText(user.validUser.firstName);
  await expect(page.locator('td')).toContainText(user.validUser.mobile);
});
