Feature: Create contacts
  AS a user
  In order to stay in touch with my friends
  I would like to be able to create a contact for them in my address book

  Scenario: Create a new contacts
    Given I visit the site
    Then I should see "Contacts"
    And I should see "You have no contacts in your address book"
    When I click "Add contact"
    Then I fill in "Name" with "John Doe"
    And I fill in "Email" with "john@doe.com"
    And I fill in "Phone" with "0123456879"
    And I fill in "Company" with "Craft Academy"
    And I fill in "Notes" with "A really awsome guy :-)"
    And I fill in "Twitter" with "johndoe"
    And I click "Save Contact"
    Then I should have 1 contact in my address book
    And I should see "John Doe"
    And I should not see "You have no contacts in your address book"

  Scenario: User creates multiple contacts
    Given I visit the site
    Then I should see "Contacts"
    And I should see "You have no contacts in your address book"
    When I click "Add contact"
    Then I fill in "Name" with "John Doe"
    And I fill in "Email" with "john@doe.com"
    And I fill in "Phone" with "0123456879"
    And I fill in "Company" with "Craft Academy"
    And I fill in "Notes" with "A really awsome guy :-)"
    And I fill in "Twitter" with "johndoe"
    And I click "Save Contact"
    Then I fill in "Name" with "Jane Doe"
    And I fill in "Email" with "jane@doe.com"
    And I fill in "Phone" with "0123456879"
    And I fill in "Company" with "Craft Academy"
    And I fill in "Notes" with "A really awsome girl :-)"
    And I fill in "Twitter" with "janedoe"
    And I click "Save Contact"
    Then I should have 2 contact in my address book
    And I should see "John Doe"
    And I should see "Jane Doe"
    And I should not see "You have no contacts in your address book"


  Scenario: User does not fill in required fields
    Given I visit the site
    Then I should see "Contacts"
    And I should see "You have no contacts in your address book"
    When I click "Add contact"
    And I fill in "Name" with ""
    And I fill in "Email" with ""
    And I fill in "Phone" with ""
    And I fill in "Company" with "Craft Academy"
    And I fill in "Notes" with "A really awsome guy :-)"
    And I fill in "Twitter" with "johndoe"
    And I click "Save Contact"
    And I should see "You have no contacts in your address book"

  Scenario: User can not see address book form when opening page
    Given I visit the site
    Then The "New contact form" should not be visible
    When I click "Add contact"
    Then The "New contact form" should be visible
