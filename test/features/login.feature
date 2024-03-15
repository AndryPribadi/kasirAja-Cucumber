Feature: Kasiraja Login Test

    @all @smoke
    Scenario: Login successfuly with valid credentials
    Given I open Kasiraja website
    When I login with valid credentials
    Then I should be on the dashboard page

     @all @negative
    Scenario: Login successfuly with invalid email
    Given I open Kasiraja website
    When I login with invalid email
    Then I should see an error message

     @all @negative
    Scenario: Login successfuly with invalid password
    Given I open Kasiraja website
    When I login with invalid password
    Then I should see an error message