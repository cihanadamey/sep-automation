@sep07
Feature: View Product Landing Page

    As a customer, I should be able to see the product landing page.

    #* AC1: The system displays the text "Cydeo Secure Checkout".
    #* AC2: The system should display the program name.
    #* AC3: Users should see a footer on the left side of the page that includes by order: 
    #*      logo, Terms and Conditions, Privacy Policy, Disclaimer, Cookie Policy
    
    #* AC4: The system displays "Need help? Contact us at enrollment@cydeo.com" in the footer on the right.


    #TODO: Create scenarios that cover all the acceptance criteria
    
    Background:
        Given user is on the enrollment page
        When  user enters valid first name and validates it.
        And user enters valid last name and validates it.
        And user enters valid email address and validates it.
        And user enters valid phone number.
        And user selects how did you hear about us ?.
        Then user click on the next button.

    @sep07-1
    Scenario: Secure Checkout Page
        Then User should see the Secure Checkout text
        And User should see the CYDEO logo
        And User should see the program name
        And User should see the terms and conditions link
        And User should see the privacy policy link
        And User should see the disclaimer link
        And User should see the cookie policy link



