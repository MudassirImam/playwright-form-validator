import { Page, Locator, expect } from '@playwright/test';

export class PracticeFormPage {
  readonly page: Page;

  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly genderMale: Locator;
  readonly mobile: Locator;
  readonly subjectsInput: Locator;
  readonly hobbiesSports: Locator;
  readonly uploadPicture: Locator;
  readonly address: Locator;
  readonly submitButton: Locator;
  readonly modalTitle: Locator;

  constructor(page: Page) {
    this.page = page;

    // ✅ BEST PRACTICE LOCATORS
    this.firstName = page.getByPlaceholder('First Name');
    this.lastName = page.getByPlaceholder('Last Name');
    this.email = page.getByPlaceholder('name@example.com');
    this.genderMale = page.getByRole('radio', { name: 'Male' });
    this.mobile = page.getByPlaceholder('Mobile Number');
    this.subjectsInput = page.locator('#subjectsInput');
    this.hobbiesSports = page.getByLabel('Sports');
    this.uploadPicture = page.locator('#uploadPicture');
    this.address = page.getByPlaceholder('Current Address');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.modalTitle = page.getByText('Thanks for submitting the form');
  }

  async goto() {
    await this.page.goto('https://demoqa.com/automation-practice-form');
  }

  async fillBasicDetails(user: any) {
    await this.firstName.fill(user.firstName);
    await this.lastName.fill(user.lastName);
    await this.email.fill(user.email);
    await this.genderMale.check();
    await this.mobile.fill(user.mobile);
  }

  async submitForm() {
    await this.submitButton.click();
  }

  async verifySubmissionSuccess() {
    await expect(this.modalTitle).toBeVisible();
  }
}
