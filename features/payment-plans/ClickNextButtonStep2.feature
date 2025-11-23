@sep16
Feature: Click on the next button on payment plans page   #! Test Only

    As a customer, I should be able to click on the next button on step 2 when I select a plan.

    #* AC1: Clicking on any plan should activate the next button
    #* AC2: When the customer clicks on the next button, the Step 3 page should be displayed.
    #* AC3: In the stepper, steps 1 and 2 should be green, and step 3 should be blue.
    #* AC4: The payment component should be displayed.
    #* AC5: A price summary should be displayed.
    #* AC6: The back button should be displayed.
    #* AC7: By default, the pay button should be displayed.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background: 
        Given user is on the enrollment page
        And user enters valid first name and validates it.
        And user enters valid last name and validates it.
        And user enters valid email address and validates it.
        And user enters valid phone number.
        And user selects how did you hear about us ?.
        And user click on the next button.

    Scenario: Click button
        When User is on the Payment Plan page
        Then Payment Plan should display in blue
        And Start Application should display green
        And Review Page should display in grey.
        And user selects the payment plan
        And user clicks on the next button
        Then Review Page should display in blue
        And Start Application should display green
        And Payment Plan should display in green
        And User should see payment component displayed.
        And User should see price summary displayed.
        And User should see back button displayed.
        And User should see pay button displayed.


