package com.training.steps;

import java.util.List;
import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ProductStep {
	@Given("^the browser is launched$")
	public void the_browser_is_launched() throws Throwable {
		System.out.println("**** the browser is launched ****");
	}

	@Given("^enter the login Details are given$")
	public void enter_the_login_Details_are_given(DataTable dataTable)
			throws Throwable {
		System.out.println("*** enter the login Details are given ****");

		List<Map<String, String>> list = dataTable.asMaps(String.class, String.class);

		for (Map<String, String> temp : list) {
			System.out.println(
					"UserName: " + temp.get("username") + 
					"\tPassword: " + temp.get("password")
				);
		}
	}

	@When("^the product is \"([^\"]*)\"$")
	public void the_product_is(String productSelected) throws Throwable {
		System.out.println("**** the product is  " + productSelected +" ****");
	}

	@Then("^virtual Private Network Product Catalog page \"([^\"]*)\"$")
	public void virtual_Private_Network_Product_Catalog_page(String loaded) throws Throwable {
		System.out.println("**** virtual Private Network Product Catalog page " + loaded +" ****");
	}

	@Then("^select the product from the list$")
	public void select_the_product_from_the_list() throws Throwable {
		System.out.println("**** select the product from the list ****");
	}

	@But("^user should not add more than \"([^\"]*)\"$")
	public void user_should_not_add_more_than(String number_of_items) throws Throwable {
		System.out.println("**** user should not add more than " 
				+ number_of_items +" ****");
	}

	//////////////////////////////
	
	
	

@When("^user is valid$")
public void user_is_valid() throws Throwable {
    System.out.println("user is valid*****");
}

@Then("^say hi$")
public void say_hi() throws Throwable {
    System.out.println("say hi*********");
}


}
