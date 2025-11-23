import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { paymentPlanPage, page, reviewPaymentPage } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

When('User is on the Payment Plan page', async function () {

    const paymentPlanText = await paymentPlanPage.chooseAPaymentPlanText.innerText();
    const expectedText = "Choose a payment plan";

    expect(paymentPlanText).toBe(expectedText);
});


Then('User should see payment component displayed.', async function () {

    await expect(reviewPaymentPage.paymentForm).toBeVisible();

});

Then('User should see price summary displayed.', async function () {

    const productPriceText = await reviewPaymentPage.productPriceText.innerText();
    expect(productPriceText).toBe("Product Price");

    const productPrice = await reviewPaymentPage.productPriceAmount.innerText();
    expect(productPrice).toBe("$500");

});

Then('User should see back button displayed.', async function () {

    await expect(reviewPaymentPage.backButton).toBeVisible();
    await expect(reviewPaymentPage.backButton).toBeEnabled();

});

Then('User should see pay button displayed.', async function () {

    await expect(reviewPaymentPage.payButton).toBeVisible();

});