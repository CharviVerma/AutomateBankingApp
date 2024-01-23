Feature: The Banking Application

  Scenario Outline: As a customer, I can log into the secure area

    Given I am on the Login page
    Then I click on the Customer Login button
    Then I select my name from the dropdown 
    Then I click on the Login button