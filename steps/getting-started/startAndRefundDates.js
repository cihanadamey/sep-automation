import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Given('user is on the start application page', async function () {
    await startApplicationPage.login();
});

Then('user should see Start Application on middle left of the page.', async function () {

    await expect(startApplicationPage.startApplicationText).toBeVisible();
    });

Then('user should see number one over the Start Application text.', async function () {

    await expect(startApplicationPage.startApplicationStepCircle).toBeVisible();
    
});

Then('user should see Program Start Date.', async function () {

    const START_DATE = await startApplicationPage.programStartDate.innerText();
    const EXPECTED_DATE = productInfo.startDate;

    expect(START_DATE).toBe(EXPECTED_DATE);
});

Then('user should see the refund policy details.', async function () {

    const REFUND_DATE = await startApplicationPage.refundEndDate.innerText();
    const EXPECTED_REFUND_DATE = productInfo.refundDate;

    expect(REFUND_DATE).toBe(EXPECTED_REFUND_DATE);

});