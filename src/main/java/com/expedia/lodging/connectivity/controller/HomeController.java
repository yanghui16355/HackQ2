package com.expedia.lodging.connectivity.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {

	
	@RequestMapping("/main")
	public String main_test(){
		String view = "/main";
		
		return view;
	}

}

