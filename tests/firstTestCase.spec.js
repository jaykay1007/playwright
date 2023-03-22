import {test,expect} from'@playwright/test';

test('have title', async({page}) =>{
    await page.goto('http://nws-nutritionist.underdev.in/');
    await expect(page).toHaveTitle('NWS | Nourish with SIM')
})