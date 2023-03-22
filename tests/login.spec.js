import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://devkeydemands.underdev.in/');
  await page.goto('https://devkeydemands.underdev.in/login');
  await page.getByPlaceholder('Enter your email ID').click();
  await page.getByPlaceholder('Enter your email ID').fill('devkeydemand@gmail.com');
  await page.getByPlaceholder('Enter your email ID').press('Tab');
  await page.getByPlaceholder('Enter your password').fill('superadmmin@1234');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Close this dialog' }).click();
  await page.locator('svg').click();
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('superadmin@1234');
  await page.getByRole('button', { name: 'Login' }).click();
});