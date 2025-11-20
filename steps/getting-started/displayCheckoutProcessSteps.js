import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
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



