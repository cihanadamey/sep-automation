@sep25
Feature: Error message for the invalid card number

    As a user, I want to be informed when my card info has failed. 

    #* AC1: An immediate error message should be thrown if the card number is wrong or too short:
    #*              Your card number is incomplete.
    #*              Your card number is invalid.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background: 
        Given user is on the enrollment page
        And user enters valid first name and validates it.
        And user enters valid last name and validates it.
        And user enters valid email address and validates it.
        And user enters valid phone number.
        And user selects how did you hear about us ?.
        And user click on the next button.
        And user selects the upfront payment plan
        And user goes to review page

    @sep25-1
    Scenario: User enters invalid card number
        When Card payment form should be displayed
        And  user enters wrong card number
        Then user should see the invalid card number error message.

    @sep25-2
    Scenario: User enters too short card number
        When user enters too short card number
        Then user should see the too short card number error message.