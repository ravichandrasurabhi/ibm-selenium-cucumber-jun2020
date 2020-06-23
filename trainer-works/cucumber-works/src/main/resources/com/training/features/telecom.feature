@sanity @telecom 
Feature: validating the user call details

  Scenario: to check if the user has dialed valid number and talking
    Given the telephone is working
    When the number is dialed
    And ring tone is heard
    Then the call is picked by recipient
    But there should not be a distrubance
