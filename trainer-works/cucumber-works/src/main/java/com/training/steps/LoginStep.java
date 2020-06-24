package com.training.steps;

import java.util.List;
import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

// this will contain any BL
// it will have selenium code 
public class LoginStep {

	@Given("the web application is loaded")
	public void the_web_application_is_loaded() {
		System.out.println("the web application is loaded>>>>>>>");
	}

	@When("the user logs in with user name")
	public void the_user_logs_in_with_user_name( DataTable dataTable) {
		System.out.println("the user logs in with user name>>>>>>>");
		
		List<Map<String, String>> list = dataTable.asMaps(String.class, String.class); 
		
		for(Map<String, String> temp: list) {
			System.out.println(temp.get("username"));
		}
		
		
		System.out.println("*****************************************");
		
	}

	@And("the password is entered")
	public void the_password_is_entered() {
		System.out.println("the password is entered>>>>>>");
	}

	
	
	// the user is valid 
	// the user is invalid 
	// the user is manager 
	// the user is ceo 
	
	@When("^the user is \"([a-zA-Z]{1,})\"$")
	public void the_user_is_type(String type) {
		System.out.println("the user is "+type+">>>>>>>>");
	}

	@Then("take the user to \"([a-zA-Z]{1,})\" page")
	public void take_the_user_to_userPage_page(String userPage) {
		System.out.println("take the user to "+userPage+" page>>>>>>>>>");
	}
	
	
}










