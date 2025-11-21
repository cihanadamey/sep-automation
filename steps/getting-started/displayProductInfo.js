import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";
import { StartApplicationPage } from "../../pages/StartApplicationPage.js";

When('User is on the enrollment page', async function () {

    const StartAppColor = await startApplicationPage.startApplicationStepCircle.evaluate(el => getComputedStyle(el).borderColor);
    expect(StartAppColor).toBe('rgb(1, 201, 255)');
    
});

Then('User should see the same product name that matched on the information card', async function () {

    const ProductName = await startApplicationPage.programNameOnInfoCard.innerText();

    expect(ProductName).toBe(productInfo.productName);

});

Then('User should see the price on the information card', async function () {

    const ProductPrice = await startApplicationPage.programBasePrice.textContent();

    await expect(ProductPrice).toContain("$500");
    
});

Then('User should see the information about the flexible payment plan', async function () {

    let FlexiblePaymentText = await startApplicationPage.flexiblePaymentsPlanAvailableText.innerText();
    expect(FlexiblePaymentText).toContainText('Flexible payments plan available');
});

Then('User should see the start date and the refund policy on the information card', async function () {

   const actualStartDate = startApplicationPage.programStartDate.innerText();
   const expectedStartDate = productInfo.startDate;

   expect(actualStartDate).toContainText(expectedStartDate);
});