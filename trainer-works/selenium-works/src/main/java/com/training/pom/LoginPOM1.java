package com.training.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPOM1 {

	private WebDriver driver;

	public LoginPOM1(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	
	} 
	
	// id="uname"
	// id="pwd"
	// id="submitBtn"
	
	@FindBy(id = "uname")
	private WebElement uName; 
	
	@FindBy(id="pwd")
	private WebElement password;
	
	@FindBy(id="submitBtn")
	private WebElement submitBtn;
	
	
	public void sendUName(String userName) {
		this.uName.clear(); 
		this.uName.sendKeys(userName);
	}
	
	public void sendPassword(String password) {
		this.password.clear(); 
		this.password.sendKeys(password);
	}
	
	public void clickSubmitBtn() {
		this.submitBtn.click();
	}
	
	
}
