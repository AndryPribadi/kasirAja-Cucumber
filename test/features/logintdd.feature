Feature: Kasiraja Login Test with TDD

    @all @negative
    Scenario Outline: Login with invalid credentials
    Given I open Kasiraja website
    When I login with <email> and <password>
    Then I should see an error message

    Examples:
        | email            | password |
        | nomo2@gmail.com  | 123456   | 
        | tio@gmail.com    | asal     |


    @all @positive @smoke @tdd
    Scenario: Login successfuly with valid credentials
    Given I open Kasiraja website
    When I login with valid credentials
    Then I should be on the dashboard page

    