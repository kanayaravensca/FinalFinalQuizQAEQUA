Feature: Login and Forgot Password Features

  Scenario: Login with Valid Credentials
    Given I visit the URL
    And I should see the homepage
    When I submit the Username
    And I submit the Password
    Then I click the button Login
    Then I verify login success

  Scenario: Forgot Password
    Given I visit the URL
    When I click the Forgot Password link
    Then I should see the Forgot Password page
    When I submit my Username for password reset
    Then I verify forgot password success

  Scenario: Admin Dashboard Access
    Given I am logged in successfully
    When I navigate to the Admin dashboard
    Then I should see the Admin dashboard page