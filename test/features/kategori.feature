
@kategori
Feature: Kasiraja Kategori Test

    Scenario: Tambah category successfuly 
    Given I login Kasiraja with valid credential
    When I add category in page category
    When I fill nama and deskripsi in page category
    Then I should see success message

    Scenario: Edit category successfuly 
    Given I update kategori in page category
    When I update nama and deskripsi in page category
    Then I should see success message

    Scenario: Delete category successfuly 
    Given I choose delete in page category
    When I delete data in page category
    Then I should see success message

    Scenario: Search category successfuly 
    Given I search in page category
    Then I should see data in search