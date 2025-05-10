import {test} from '@playwright/test'

test('Youtube Search', async ({page}) => {

    await page.goto("https://www.youtube.com");

    let searchBox = page.locator("//input [@name='search_query']");

    // await searchBox.type("Playwright Automation");
    await searchBox.fill("Barış Özcan");
    await searchBox.press('Enter');
    // let firstVideo = await page.locator("(//a[@id='video-title'])[1]");
    // let firstVideo = await page.locator("(//a[@id='video-title'])[1]");
    await page.getByRole('link', { name: /Tek Kişilik Dev Kadro/i }).click();
    // await firstVideo.click;
}); 