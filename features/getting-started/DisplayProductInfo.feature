@sep09
Feature: Display the product information

    As a customer, I should be able to see the product information.

    #* AC1: The product name should be displayed on the information card.
    #* AC2: The product name on the information card matches the product name on the left side of the screen.
    #* AC3: The price of the product should be displayed.
    #* AC4: The text indicating a flexible payment plan should be available and displayed.
    #* AC5: The program start date should be displayed.
    #* AC6: The return policy and the final date for returns should be displayed.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page

        Scenario: User should see the correct product info.
        When User is on the enrollment page
        Then User should see the same product name that matched on the information card
        And User should see the price on the information card
        And User should see the information about the flexible payment plan
        And User should see the start date and the refund policy on the information card


    