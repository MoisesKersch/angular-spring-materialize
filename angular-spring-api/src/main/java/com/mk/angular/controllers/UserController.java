package com.mk.angular.controllers;

import java.util.Optional;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mk.angular.model.User;
import com.mk.angular.repositories.UserRepository;
 
@RestController
public class UserController 
{
	UserRepository userRepository;
	
	public UserController(UserRepository UserRepository)
	{
		this.userRepository = UserRepository;
	}
	
	@PostMapping(value = "/register")
	public User postUser(User user) 
	{
		user = this.userRepository.save(user);
		return user;
	}
	
	@PostMapping(value = "/isusername")
	public Boolean postIsUserName(@RequestBody String username) 
	{
		Optional<User> oUser = userRepository.findByUserName(username);
		return oUser.isPresent();
	}
}