package com.training.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.training.util.Sleep;
import com.training.waits.WaitTypes;

// will not have information on which browser this has to be 
// executed, the selenium script should give the browser information 

public class LoginPOM {
	private WebDriver driver; 
	private WebElement element; 
	
	private WaitTypes waitTypes; 
	
	// the parametric constructor to load the driver 
	public LoginPOM(WebDriver driver) {
		this.driver = driver; 
		this.waitTypes = new WaitTypes(driver); 
	}

	// id="uname"
	// this can be taken from .properties files 
	public void sendUserName(String userName) {
		element = driver.findElement(By.id("uname")); 
		element.clear();
		element.sendKeys(userName);
	}

	// id="pwd"
	public void sendPassword(String password) {
		// imagine -> 5 seconds 
		
//		element = driver.findElement(By.id("pwd"));
		
		waitTypes.waitForElement(By.id("pwd"), 10).clear();
		waitTypes.waitForElement(By.id("pwd"), 10).sendKeys(password);
		
//		element.clear();
//		element.sendKeys(password);
	}
	
	
	// id="submitBtn"
	public void clickSubmitBtn() {
//		element = driver.findElement(By.id("submitBtn"));
//		element.click();
		
		waitTypes.clickWhenReady(By.id("submitBtn"), 10);
		
		
	}
	
	
}
