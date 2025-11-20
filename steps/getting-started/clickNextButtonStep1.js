import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";



Then('user click on the next button.', async function () {

    await startApplicationPage.nextButton.click();

});

Then('user should be on the next page.', async function () {

    await startApplicationPage.paymentPlanStepCircle.isVisible();

    await expect(startApplicationPage.paymentPlanText).toContainText("Payment plan");

});

