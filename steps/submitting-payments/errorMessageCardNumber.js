import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { reviewPaymentPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

When('Card payment form should be displayed', async function () {

    const paymentForm = await reviewPaymentPage.paymentForm.isVisible();
    expect(paymentForm).toBe(true);
});

When('user enters wrong card number', async function () {

   const paymentIframe = page.frameLocator("(//iframe[contains(@title, 'Secure payment')])[1]");

   const cardNumberInput = paymentIframe.locator("(//input[@type='text'])[1]");

   await cardNumberInput.fill("1111 1111 1111 11111");

   await reviewPaymentPage.expiryDateInput.click();
});

Then('user should see the invalid card number error message.', async function () {

    const invalidCardNumberError = await reviewPaymentPage.cardNumberErrorMessage.isVisible();
    expect(invalidCardNumberError).toBe(true);

});



When('user enters too short card number', async function () {

    const paymentIframe = page.frameLocator("(//iframe[contains(@title, 'Secure payment')])[1]");
    const cardNumberInput = paymentIframe.locator("(//input[@type='text'])[1]");
    await cardNumberInput.fill("11111");
    await reviewPaymentPage.expiryDateInput.click();


});

Then('user should see the too short card number error message.', async function () {

    const shortCardNumberError = await reviewPaymentPage.cardNumberErrorMessage.isVisible();
    expect(shortCardNumberError).toBe(true);

});