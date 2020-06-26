package com.training.tests;


import static  com.training.util.Sleep.*; 


import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.training.pom.LoginPOM;
import com.training.util.DriverFactory;
import com.training.util.DriverNames;
import com.training.util.Sleep;

public class LoginTest2 {

	private WebDriver driver; 
	private String URL; 
	private String URL2;
	private LoginPOM loginPOM; 
	
	@Before
	public void setUp() {
		driver = DriverFactory.getDriver(DriverNames.CHROME); 
		URL="http://naveenks.com/selenium/LoginForm.html"; 
		
		this.loginPOM = new LoginPOM(driver); 
		
		// it will open the page... 
		driver.get(URL);
	}

	@After
	public void tearDown() {
		sleepSeconds(3);
		driver.quit();
	}
	
	@Test
	public void test() {
		loginPOM.sendUserName("Harry");
		loginPOM.sendPassword("secretTest"); 
		loginPOM.clickSubmitBtn();
	}
}







