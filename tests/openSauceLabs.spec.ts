import { test, expect } from "@playwright/test";

test('Open Sauce demo webpage', async ({page}) => {
    await page.goto('https://www.saucedemo.com/v1/');
    await expect(page).toHaveTitle(/Swag Labs/);

})
