@sep19
Feature: Click on the next button on step 1

    As a customer, I should be able to click on the next button on step 1 when I give valid information.

    #* AC1: The next button should take customers to step 2 when given valid information.
    #*              a. Test by providing all fields
    #*              b. Test by providing only the required fields
    

    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page

    @sep19-1
    Scenario: User enters valid personal details
        Then user enters valid first name and validates it.
        And user enters valid last name and validates it.
        And user enters valid email address and validates it.
        And user enters valid phone number.
        And user selects how did you hear about us ?.
        And user click on the next button.

    @sep19-2
    Scenario: User should be able to see next page after clicking on next button
        Then user enters valid first name and validates it.
        And user enters valid last name and validates it.
        And user enters valid email address and validates it.
        And user enters valid phone number.
        And user selects how did you hear about us ?.
        And user click on the next button.
        Then user should be on the next page.