import {test, expect} from '@playwright/test'

test('Getting the Title of the page', async ({page}) => {
    await page.goto("https://practice.cydeo.com/");
    let title =await page.title();
    console.log(title);
    expect(title).toBe("Practice");
}); 

test('@smoke Getting current URL', async ({page}) => {
    await page.goto("https://practice.cydeo.com/");
    let URL =await page.url();
    console.log(URL);
    
}); 

test('Set the window size', async ({page}) => {

    await page.goto("https://practice.cydeo.com/");
    await page.setViewportSize({width:700, height:900});
}); 