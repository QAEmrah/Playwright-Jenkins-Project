import { test, expect } from "@playwright/test";

test.describe("My Test Group", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");

    console.log("Before each is executed");
  });

  test("Checks the radio button and checkboxes", async ({ page }) => {
    let checkBoxLink = page.locator("text='Checkboxes'");
    checkBoxLink.click();

    let checkBox1 = page.locator("#box1");
    await checkBox1.check();
    expect(await checkBox1.isChecked()).toBeTruthy;

  });

  test("@debug UnChecks the radio button and checkboxes", async ({ page }) => {
    let checkBoxLink = page.locator("text='Checkboxes'");
    checkBoxLink.click();

    let checkBox2 = page.locator("#box2");
    await checkBox2.uncheck();
    expect(await checkBox2.isChecked()).toBeFalsy();
    await expect(checkBox2).not.toBeChecked();
    // await page.close();
  });

  test("selectOption used for dropdown", async ({ page }) => {
    let dropDownLink = page.locator("text='Dropdown'");
    dropDownLink.click();

    let simpleDropdown = page.locator("#dropdown");
    await simpleDropdown.selectOption({value:"1"}); // value
    await simpleDropdown.selectOption({label:"Option 2"}); // label
    await simpleDropdown.selectOption({index:1}); // index
    await page.close();
  });

  test("innerText retrieves the visible text", async ({ page }) => {
    let headerElement = page.locator("span.h1y");

    let textContent = await headerElement.textContent();
    let innerActualText = await headerElement.innerText();
    console.log(textContent);
    console.log(innerActualText);
  });

  test("@debug innerValue retrieves the inputted text", async ({ page }) => {
    await page.setViewportSize({width:700, height:300});
    let inputs = page.locator("a[href='/inputs']");
    await inputs.scrollIntoViewIfNeeded();
    await inputs.click();

    let inputsTextBox = page.locator("input[type='number']");
    await inputsTextBox.fill("123");


    console.log(await inputsTextBox.inputValue());
  });

  test("getAttribute retrieves the attribute value", async ({ page }) => {
    await page.setViewportSize({width:700, height:300});
    let inputs = page.locator("a[href='/inputs']");
    await inputs.scrollIntoViewIfNeeded();
    await inputs.click();

    let inputsTextBox = page.locator("input[type='number']");
    await inputsTextBox.fill("123");
    console.log(await inputsTextBox.inputValue());
  });
});
