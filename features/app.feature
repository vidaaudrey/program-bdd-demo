Feature: Search Google
  As a user, I want to user Google to search

  Scenario: Visit Page
    Given I am on Google home page
    Then I should see "Google" as the page title

  Scenario: Search By Keyword
    Given I am on Google home page
    When I input the keywords and start search
    Then I should see the search results
