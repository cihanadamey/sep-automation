import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page, paymentPlanPage } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";
import { StartApplicationPage } from "../../pages/StartApplicationPage.js";


Then('user enters valid first name and validates it.', async function () {

   const firstName= await startApplicationPage.firstNameInputBox;
   await firstName.fill("John");
   await expect(firstName).toHaveValue("John");
});

Then('user enters valid last name and validates it.', async function () {

    const lastName= await startApplicationPage.lastNameInputBox;
    await lastName.fill("Doe");
    await expect(lastName).toHaveValue("Doe");

});

Then('user enters valid email address and validates it.', async function () {

    let email = await startApplicationPage.emailInputBox;
    await email.fill("johndoe@example.com");
    let emailInput= await expect(startApplicationPage.emailInputBox).toHaveValue("johndoe@example.com");

    
});

Then('user enters valid phone number.', async function () {

    let phoneNumber = await startApplicationPage.phoneNumberInputBox;
    await phoneNumber.fill("1234567890");
    await expect(phoneNumber).toHaveValue("1234567890");

});

Then('user selects how did you hear about us ?.', async function () {

    await startApplicationPage.howDidYouHearAboutUsDropDown.click();

    await startApplicationPage.linkedInOptionFromDropDown.click();

    
});

Then('user leaves empty first name.', async function () {

    await startApplicationPage.firstNameInputBox.clear();
});

Then('the next button should not be clickable.', async function () {

    await startApplicationPage.nextButton.click();

    await expect(startApplicationPage.nextButton).toBeDisabled();

});


When('User is on the start application page', async function () {

    await expect(startApplicationPage.startApplicationText).toBeVisible();

});

Then('Start Application should display in blue', async function () {

    const StartAppColor = await startApplicationPage.startApplicationStepCircle.evaluate(el => getComputedStyle(el).borderColor);
    expect(StartAppColor).toBe('rgb(1, 201, 255)');
});

Then('Payment Plan and Review should display in grey.', async function () {

    const paymentPlanColor = await startApplicationPage.paymentPlanStepCircle.evaluate(el => getComputedStyle(el).borderColor);
    expect(paymentPlanColor).toBe('rgb(217, 226, 236)');

    const reviewColor = await startApplicationPage.reviewStepCircle.evaluate(el => getComputedStyle(el).borderColor);
    expect(reviewColor).toBe('rgb(217, 226, 236)');
});

When('User is on the payment plan page', async function () {

    await expect(startApplicationPage.paymentPlanText).toBeVisible();

    let paymentPlantext = await paymentPlanPage.chooseAPaymentPlanText;
    await expect(paymentPlantext).toContainText("Choose a payment plan");

});

Then('Payment Plan should display in blue', async function () {

    const paymentPlanColor = await startApplicationPage.paymentPlanStepCircle.evaluate(el => getComputedStyle(el).borderColor);
    expect(paymentPlanColor).toBe('rgb(1, 201, 255)');

});

Then('Start Application should display green', async function () {

    const StartAppColor = await startApplicationPage.startApplicationStepCircle.evaluate(el => getComputedStyle(el).borderColor);
    expect(StartAppColor).toBe('rgb(172, 245, 138)');

});

Then('Review Page should display in grey.', async function () {

    const reviewColor = await startApplicationPage.reviewStepCircle.evaluate(el => getComputedStyle(el).borderColor);
    expect(reviewColor).toBe('rgb(217, 226, 236)');

});

Then('user selects the payment plan', async function () {

    await paymentPlanPage.perMonthTextInstallments.click();

    
});

Then('user clicks on the next button', async function () {

    await paymentPlanPage.nextButton.click();

});


Then('Review Page should display in blue', async function () {
    const reviewColor = await startApplicationPage.reviewStepCircle.evaluate(el => getComputedStyle(el).borderColor);
    expect(reviewColor).toBe('rgb(1, 201, 255)');

});

Then('Payment Plan should display in green', async function () {

    const paymentPlanColor = await startApplicationPage.paymentPlanStepCircle.evaluate(el => getComputedStyle(el).borderColor);
    expect(paymentPlanColor).toBe('rgb(172, 245, 138)');

});
