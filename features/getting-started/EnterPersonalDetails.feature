@sep10
Feature: Enter my Personal details

    As a customer, I should be able to enter my Personal details.

    #* AC1: Default field types and values should be as follows:
    #*          a. First Name: Text field is present.
    #*          b. Last Name: Text field is present.
    #*          c. Email Address: Text field is present and validates for email format.
    #*          d. Phone: The field allows numbers only.

    #* AC2: "How did you hear about us?" A standard dropdown list is present.
    #* AC3: The 'Next' button should be disabled if any required data is missing or invalid.

    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page

    @sep10-1
    Scenario: User enters valid personal details
        Then user enters valid first name and validates it.
        And user enters valid last name and validates it.
        And user enters valid email address and validates it.
        And user enters valid phone number.
        And user selects how did you hear about us ?.
        

    @sep10-2
    Scenario: User leaves empty first name
        Then user leaves empty first name.
        And user enters valid last name and validates it.
        And user enters valid email address and validates it.
        And user enters valid phone number.
        And user selects how did you hear about us ?.
        And the next button should not be clickable.

    

