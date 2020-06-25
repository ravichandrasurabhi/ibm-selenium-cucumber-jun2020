package com.training.pom.tests;

import org.testng.annotations.Test;

import com.training.util.DriverFactory;
import com.training.util.DriverNames;

import org.testng.annotations.BeforeTest;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterTest;

public class LoginTest {
	
	private WebDriver driver; 
	private String URL; 
	private String URL2; 
	
	@Test
	public void loginTest() {
		System.out.println("hi.... ");
	}

	@BeforeTest
	public void setUp() {
		driver = DriverFactory.getDriver(DriverNames.CHROME); 
		URL="http://naveenks.com/selenium/LoginForm.html"; 
	}

	@AfterTest
	public void tearDown() {
	}

}
