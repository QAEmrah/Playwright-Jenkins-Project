import {test} from "playwright/test";

test.describe('Test Group 1', () => {
    
    test.test.beforeAll(async ({ browser }) => {
        console.log("Before All is executed");
    });

    test.test.afterAll(async ({ browser }) => {
        console.log("After All is executed");

    })

    test.test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/");

        console.log("Before each is executed");

    })

    test.test.afterEach(async ({ page }) => {
        await page.waitForTimeout(2000);
    })
    
    
    
    test('Test Case 1', async ({ page }) => {
     console.log(await page.title());

    });

    test('Test Case 2', async ({ page }) => {
        console.log(await page.url());

    });

})


test('', async ({ page }) => {
    
})
