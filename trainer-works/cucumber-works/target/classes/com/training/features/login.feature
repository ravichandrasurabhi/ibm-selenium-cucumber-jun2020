# this is my comment
@sanity @login
Feature: to validate login

  @validlogin
  Scenario: to check if the user is valid
    Given the web application is loaded
    When the user logs in with user name
    |username|
    |saileela|
    |rahul|
    And the password is entered
    When the user is "valid"
    Then take the user to "home" page

  @invalidlogin
  Scenario: to check if the user is invalid
    Given the web application is loaded
    When the user logs in with user name
    |username|
    |sarada|
    |imran|
    And the password is entered
    When the user is "invalid"
    Then take the user to "error" page

  @managerlogin
  Scenario: to check if the user is invalid
    Given the web application is loaded
    When the user logs in with user name
    And the password is entered
    When the user is "manager"
    Then take the user to "successmanager" page
