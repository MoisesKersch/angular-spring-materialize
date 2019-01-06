package com.mk.angular.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mk.angular.model.User;
import com.mk.angular.repositories.UserRepository;
 
@RestController
public class UserController 
{
	UserRepository userRepository;
	
	@Autowired
	PasswordEncoder encoder;
	
	public UserController(UserRepository UserRepository)
	{
		this.userRepository = UserRepository;
	}
	
	@PostMapping(value = "/register")
	public User postUser(@RequestBody User user) 
	{
		User userCreated = new User(user.getUserName(),
        		user.getEmail(), encoder.encode(user.getPassword()), null, null);
		
		user = this.userRepository.save(userCreated);
		return user;
	}
	
	@PostMapping(value = "/isusername")
	public Boolean postIsUserName(@RequestBody String username) 
	{
		Optional<User> oUser = userRepository.findByUserName(username);
		return oUser.isPresent();
	}
	
	@PostMapping(value = "/foo")
	public String foo() 
	{
		return "foo";
	}
}