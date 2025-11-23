import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { paymentPlanPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then('User should see Upfront as the payment method.', async function () {

    const UpfrontText = await paymentPlanPage.upfrontPaymentOption.innerText();
    const expectedText = "Upfront";

    expect(UpfrontText).toBe(expectedText);
});

Then('User should see {string} as text.', async function (string) {

    const upfrontPaymentText = await paymentPlanPage.upfrontPaymentAmount.innerText();
    const expectedText = "$400 pay once";
    expect(upfrontPaymentText).toBe(expectedText);

});

Then('User should see {string}', async function (string) {

    const greenBadge = await paymentPlanPage.greenBadgeTextUpfrontDiscount.isVisible();
    expect(greenBadge).toBe(productInfo.prices[0].upfrontDiscount);

});


Then('User should see {string} on Upfront payment method.', async function (string) {

    const couponAvailable = await paymentPlanPage.couponAvailableBadgeUpfrontDiscount.isVisible();
    expect(couponAvailable).toBe(productInfo.prices[0].allowCoupons);

});

Then('User should see {string} as the payment method.', async function (string) {

    const installmentPaymentText = await paymentPlanPage.installmentsPaymentOption.innerText();
    const expectedText = "Installments";

    expect(installmentPaymentText).toBe(productInfo.prices[1].numberOfInstallments+" "+expectedText);
});

Then('User should see {string} as the monthly installment amount.', async function (string) {

    const installmentPayment = await paymentPlanPage.installmentsPaymentAmount.innerText();
    const expectedText = "$100 per month";
    expect(installmentPayment).toBe(expectedText);
});

Then('User should see {string} on Installment payment method.', async function (string) {

    const couponAvailable = await paymentPlanPage.couponAvailableBadgeInstallments.isVisible();
    expect(couponAvailable).toBe(productInfo.prices[1].allowCoupons);

});