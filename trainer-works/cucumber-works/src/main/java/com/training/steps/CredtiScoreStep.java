package com.training.steps;

import java.util.List;
import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CredtiScoreStep {

	@Given("^you have enough credit score$")
	public void you_have_enough_credit_score(DataTable data ) throws Throwable {
		System.out.println("you have enough credit score.....");
		
		// ctrl/cmd + 2 + l
		List<Map<String, String>> list = data.asMaps(String.class, String.class); 
		
//		System.out.println(list.get(0).get("work_type"));
//		System.out.println(list.get(1).get("work_type"));
//		System.out.println(list.get(2).get("work_type"));
		
		
		for(Map<String, String> temp : list) {
			System.out.println("Work Type : " + temp.get("work_type"));
			System.out.println("Years Of Exp : " +
					Integer.parseInt(temp.get("years_of_exp")));
		}
		
	}

	@When("^you apply for loan$")
	public void you_apply_for_loan() throws Throwable {
		System.out.println("you apply for loan......");
	}

	@Then("^loan is sanctioned$")
	public void loan_is_sanctioned() throws Throwable {
		System.out.println("loan is sanctioned.....");
	}

}
