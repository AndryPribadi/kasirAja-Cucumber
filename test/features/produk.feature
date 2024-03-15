@regression
Feature: Kasiraja Produk Test
 
    Scenario: Tambah produk successfuly 
    Given I login Kasiraja valid credential
    When I add produk in page produk
    When I fill nama, deskripsi, harga beli, harga jual, stok and kategori in page produk
    Then I should see success message

    Scenario: Edit produk successfuly 
    Given I update produk in page produk
    When I update nama, deskripsi, harga beli, harga jual, stok and kategori in page produk
    Then I should see success message

    Scenario: Delete produk successfuly 
    Given I choose delete in page produk
    When I delete data in page produk
    Then I should see success message

    Scenario: Search produk successfuly 
    Given I search in page produk
    Then I should see data in search