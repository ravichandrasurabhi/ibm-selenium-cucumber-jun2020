package com.training.util;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	@Before
	public void setUp() {
		System.out.println("all setup work can go here... ");
	}
	
	@After
	public void tearDown() {
		System.out.println("all tear down work goes here... ");
	}
	

	@Before("@login")
	public void setUpLogin() {
		System.out.println("all setup work can go here... for before login ");
	}
	
	@After("@login")
	public void tearDownLogin() {
		System.out.println("all tear down work goes here... for before login");
	}
}
