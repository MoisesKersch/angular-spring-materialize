package com.mk.angular.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mk.angular.auth.JwtProvider;
import com.mk.angular.model.User;
import com.mk.angular.pojo.JwtResponse;
import com.mk.angular.repositories.UserRepository;

@RestController
public class LoginController {

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	JwtProvider jwtProvider;
	
	UserRepository userRepository;
	
	public LoginController(UserRepository userRepository)
	{
		this.userRepository = userRepository;
	}

	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@RequestBody User user) {

		Authentication authentication = authenticationManager
				.authenticate( new UsernamePasswordAuthenticationToken( user.getUserName(), user.getPassword() ));

		SecurityContextHolder.getContext().setAuthentication(authentication);

		String jwt = jwtProvider.generateJwtToken(authentication);
		
		return ResponseEntity.ok( new JwtResponse(jwt) );
	}
}