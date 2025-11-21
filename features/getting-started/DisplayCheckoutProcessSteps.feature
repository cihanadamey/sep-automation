@sep08
Feature: Display the steps of the checkout process

    As a customer, I should be able to know where I am in the checkout process using the stepper.

    #* AC1: The system should display the steps of the checkout process as "1-Start Application", "2-Payment Plan", and "3-Review".
    #* AC2: The system should highlight "Start Application" in blue.
    #* AC3: The system should display "Payment Plan" and "Review" in grey.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page

        Scenario: Start Application step 
        When User is on the start application page
        Then Start Application should display in blue
        And Payment Plan and Review should display in grey.
        And user enters valid first name and validates it.
        And user enters valid last name and validates it.
        And user enters valid email address and validates it.
        And user enters valid phone number.
        And user selects how did you hear about us ?.
        And user click on the next button.
        And User is on the payment plan page
        Then Payment Plan should display in blue
        And  Start Application should display green
        And  Review Page should display in grey.
        And  user selects the payment plan
        And user clicks on the next button
        Then Review Page should display in blue
        And  Start Application should display green
        And  Payment Plan should display in green
        