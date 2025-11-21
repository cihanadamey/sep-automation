import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page, leftMainPage } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then('User should see the Secure Checkout text', async function () {

    await expect(leftMainPage.secureCheckout).toBeVisible();
    
});

Then('User should see the CYDEO logo', async function () {

    await leftMainPage.cydeoImageAtLeftWindow.isVisible();

});

Then('User should see the program name', async function () {

    let programN = await leftMainPage.programName.innerText();

    expect(programN).toBe("Test Automation with Selenium");

});

Then('User should see the terms and conditions link', async function () {

    await expect(leftMainPage.footerElements1).toBeVisible();
    await expect(leftMainPage.footerElements1).toBeEnabled();

});

Then('User should see the privacy policy link', async function () {

    await expect(leftMainPage.footerElements2).toBeVisible();
    await expect(leftMainPage.footerElements2).toBeEnabled();

});

Then('User should see the disclaimer link', async function () {

    await expect(leftMainPage.footerElements3).toBeVisible();
    await expect(leftMainPage.footerElements3).toBeEnabled();

});

Then('User should see the cookie policy link', async function () {

    await expect(leftMainPage.footerElements4).toBeVisible();
    await expect(leftMainPage.footerElements4).toBeEnabled();

});
