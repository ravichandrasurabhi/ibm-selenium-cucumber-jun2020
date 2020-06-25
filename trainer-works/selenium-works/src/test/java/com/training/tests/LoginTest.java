package com.training.tests;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.training.pom.LoginPOM;
import com.training.util.DriverFactory;
import com.training.util.DriverNames;

public class LoginTest {

	private WebDriver driver; 
	private String URL; 
	private String URL2;
	 
	
	
	@Before
	public void setUp() {
		driver = DriverFactory.getDriver(DriverNames.CHROME); 
		URL="http://naveenks.com/selenium/LoginForm.html"; 
		 	
		// it will open the page... 
		driver.get(URL);
	}

	@After
	public void tearDown() {
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		driver.quit();
	}
	
	@Test
	public void test() {
		driver.findElement(By.id("uname")).sendKeys("username");
		driver.findElement(By.id("pwd")).sendKeys("Secret");

		driver.findElement(By.id("submitBtn")).click(); 
	}

}







