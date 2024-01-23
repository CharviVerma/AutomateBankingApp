Feature: The Banking Application

  Scenario Outline: As a customer, I can look into my account details

    Given I am on the Transactions page
    Then I click on the Transactions button
    Then I retrieve the latest transactional data 
  