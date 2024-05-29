Feature: List addresses
  Scenario: Searching an address by an existing cep number
    Given I have navigated to cep page
    Then fill the cep number form
    When click on the search button
    Then I should see the addresses related to the given cep number. 

  Scenario: Searching an address by non-existent cep number
    Given I have navigated to cep page
    Then fill the cep number form with a non-existent cep number
    When click on the search button
    Then I should see a message telling that it was not possible to find an address related to the given cep number. 
