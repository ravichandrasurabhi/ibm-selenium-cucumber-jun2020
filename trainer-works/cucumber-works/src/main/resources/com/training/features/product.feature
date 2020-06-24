@sanity @product
Feature: to shop for the product

# which you want to be repeated for all the scenarios 
Background: 
    Given the browser is launched

  Scenario Outline: 
    And enter the login Details are given
      | username | password   |
      | mintu    | secret123  |
      | richa    | goswami333 |
      | shrikant | kanth1234  |
    When the product is "<product_selected>"
    Then virtual Private Network Product Catalog page "<loaded>"
    And select the product from the list
    But user should not add more than "<number_of_items>"

    Examples: 
      | product_selected               | loaded     | number_of_items |
      | product selected               | loaded     |               3 |
      | product selected               | not loaded |               5 |
      | product not selected           | loaded     |               3 |
      | product not selected           | not loaded |               3 |
      | product selected not available | loaded     |               1 |
      | product selected not available | not loaded |               3 |

      
Scenario: 
	When user is valid 
	Then say hi
	
	
	
	