@sanity @credit
Feature: this is for sample check of credit score

  Scenario: just check if you can get load
    Given you have enough credit score
    ## heading 
    	| work_type	|  years_of_exp |  
    	| govt			|	    5a        | 
    	|private		|     6b				|
    	|consultant	|     9					| 
    When you apply for loan
    Then loan is sanctioned
