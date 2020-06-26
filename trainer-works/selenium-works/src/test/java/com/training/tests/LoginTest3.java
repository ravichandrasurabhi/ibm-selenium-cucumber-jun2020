package com.training.tests;


import static com.training.util.Sleep.sleepSeconds;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;

import com.training.pom.LoginPOM1;
import com.training.util.CaptureScreenShot;
import com.training.util.DriverFactory;
import com.training.util.DriverNames;

public class LoginTest3 {

	private WebDriver driver; 
	private String URL; 
	private String URL2;
	private LoginPOM1 loginPOM; 
	private CaptureScreenShot screenShot; 
	
	@Before
	public void setUp() {
		driver = DriverFactory.getDriver(DriverNames.CHROME); 
		URL="http://naveenks.com/selenium/LoginForm.html"; 
		
		this.loginPOM = new LoginPOM1(driver); 
		this.screenShot = new CaptureScreenShot(driver); 
		// it will open the page... 
		driver.get(URL);
	}

	@After
	public void tearDown() {
		sleepSeconds(5);
		driver.quit();
	}
	
	@Test
	public void test() {
		 loginPOM.sendUName("Peter");
		 loginPOM.sendPassword("Testing12345");
//		 screenShot.screenShot("first");
		 screenShot.screenShot();
		 loginPOM.clickSubmitBtn(); 
	}
}







