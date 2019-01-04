package com.mk.angular.controllers;

import java.security.Principal;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController
{
	@RequestMapping("/login")
	public Principal user(Principal principal) 
	{
		System.out.println("logged in");
		return principal;
	}
}