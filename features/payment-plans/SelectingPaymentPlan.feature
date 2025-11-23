@sep14
Feature: Selecting a price plan

    As a customer, I want to be able to Choose a payment plan from the available options 
    so that I can choose the one that best suits my needs.

    #* AC1: When the user selects any payment plan (Accordion) that option should be highlighted to indicate selection.
    #* AC2: Upon selecting any pricing option, the 'Next' button should become active (indicating the user can proceed).
    #* AC3: Users should be able to change their plan selections at any time before finalizing their choice.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background: 
        Given user is on the enrollment page
        And user enters valid first name and validates it.
        And user enters valid last name and validates it.
        And user enters valid email address and validates it.
        And user enters valid phone number.
        And user selects how did you hear about us ?.
        And user click on the next button.

    @sep14-1
    Scenario: User selects the Upfront Payment Plan
        When User is on the payment plan page
        Then user should see the next button is not active without any selected plan.
        And user selects the upfront payment plan
        And user should see the upfront payment plan highlighted.
        And user should see the upfront payment plan details.


    @sep14-2
    Scenario: User selects the Monthly Payment Plan
        When User is on the payment plan page
        Then user should see the next button is not active without any selected plan.
        And user selects the five installment payment plan
        And user should see the monthly plan highlighted.
        And user should see the monthly payment plan details.