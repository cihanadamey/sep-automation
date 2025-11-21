@sep08
Feature: Display the steps of the checkout process

    As a customer, I should be able to know where I am in the checkout process using the stepper.

    #* AC1: The system should display the steps of the checkout process as "1-Start Application", "2-Payment Plan", and "3-Review".
    #* AC2: The system should highlight "Start Application" in blue.
    #* AC3: The system should display "Payment Plan" and "Review" in grey.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page

        @sep08-1
        Scenario: Start Application step 
        When User is on the start application page
        Then Start Application should display in blue
        And  Payment Plan and Review should display in grey.


    Background: 
        Given user is on the enrollment page
        

        @sep08-2
        Scenario: Payment Plan Page
        When User is on the payment plan page
        Then Payment Plan should display in blue
        And  Start Application should display green
        And  Review Page should display in grey.


        @sep08-3
        Scenario: Review Page
        When User is on the review page
        Then Review Page should display in blue
        And  Start Application should display green
        And  Payment Plan should display green
        