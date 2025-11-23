@sep17
Feature: View payment plan options in Step 2   #! test only

    As a customer, I should be able to see payment plan options in Step 2.

    #* AC1: Upfront payment:
    #*      There should be only one upfront price
    #*      Text should be:
    #*              Upfront  (first row)
    #*              $ <upfont_price> pay once (second row)

    #* AC2: Installment plans:
    #*      There must be total <num> Payment Plans
    #*      There can be <number_of_installments> installments
    #*      If there are installments:
    #*            Text should be
    #*            <number_of_installments> Installments (first row)
    #*           $ <monthly_price> per month (second row)
    #*            Installment plans should be unique



    #TODO: Create scenarios that cover all the acceptance criteria

    Background: 
        Given user is on the enrollment page
        And user enters valid first name and validates it.
        And user enters valid last name and validates it.
        And user enters valid email address and validates it.
        And user enters valid phone number.
        And user selects how did you hear about us ?.
        And user click on the next button.

    @sep17-1
    Scenario: User should see upfront payment details
        Then User should see Upfront as the payment method.
        And  User should see "$400 pay once" as text.
        And  User should see "$100 Upfront discount"
        And  User should see "Coupons available" on Upfront payment method.

    @sep17-2
    Scenario: User should see installment plan details
        Then  User should see "5 Installment" as the payment method.
        And User should see "$100 per month" as the monthly installment amount.
        And User should see "Coupons available" on Installment payment method.






    
