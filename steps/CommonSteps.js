import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
  startApplicationPage,
  leftMainPage,
  paymentPlanPage,
  reviewPaymentPage,
  page,
} from "../globalPagesSetup.js";
import { PaymentPlanPage } from "../pages/PaymentPlanPage.js";


Given("user is on the enrollment page", async function () {
  await startApplicationPage.login();
});


Given('user goes to review page', async function () {

    await paymentPlanPage.activeNextButton.click();
    
});



