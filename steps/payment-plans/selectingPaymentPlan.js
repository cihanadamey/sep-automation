import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { paymentPlanPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then('user should see the next button is not active without any selected plan.', async function () {

    await expect(paymentPlanPage.nextButton).toHaveClass("next-button disabledButton");
});

Then('user selects the upfront payment plan', async function () {

    await paymentPlanPage.upfrontPaymentFrame.click();
    
});

Then('user should see the upfront payment plan highlighted.', async function () {

    await expect(paymentPlanPage.upfrontPaymentFrame).toBeVisible();
    await expect(paymentPlanPage.upfrontPaymentFrame).toHaveClass(/plan-selected/);

});

Then('user should see the upfront payment plan details.', async function () {

    const basePriceAmount = paymentPlanPage.basePriceAmountUnderUpfront;

    await expect(basePriceAmount).toContainText('$' + productInfo.prices[0].baseAmount);

    const upfrontPayment = paymentPlanPage.upfrontDiscountAmountUnderUpfront;

    await expect(upfrontPayment).toContainText('$' + productInfo.prices[0].upfrontDiscountAmount);

});

Then('user selects the five installment payment plan', async function () {

    await paymentPlanPage.installmentsPaymentFrame.click();

});

Then('user should see the monthly plan highlighted.', async function () {

    expect(paymentPlanPage.installmentsPaymentFrame).toBeVisible;
    await expect(paymentPlanPage.installmentsPaymentFrame).toHaveClass(/plan-selected/);


});

Then('user should see the monthly payment plan details.', async function () {

    const basePriceAmount = paymentPlanPage.basePriceAmountUnderInstallments;

    await expect(basePriceAmount).toContainText('$' + productInfo.prices[1].baseAmount);

    const installmentNumber =await paymentPlanPage.installmentsNumberUnderInstallments.innerText();

    expect(installmentNumber).toContain(productInfo.prices[1].numberOfInstallments.toString());

    const pricePerInstallment = paymentPlanPage.pricePerInstallmentsAmountUnderInstallments.innerText();

    await expect(pricePerInstallment).toContainText('$' + productInfo.prices[1].pricePerInstallment);

});