@sep11
Feature: Program start dates and Refund dates

    As a customer, I want to see the program start dates and refund policy details before enrolling
    so that I can make informed decisions.

    #* AC1: Program Start date and refund dates must be displayed in Step 1 in Test Automation with Selenium Program.

    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page
        
    Scenario: Program start date and refund policy details are displayed
        Then user should see Start Application on middle left of the page.
        And  user should see number one over the Start Application text.
        And  user should see Program Start Date.
        And  user should see the refund policy details.


