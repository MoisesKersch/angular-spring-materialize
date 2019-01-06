package com.mk.angular.services;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.mk.angular.auth.UserPrinciple;
import com.mk.angular.model.User;
import com.mk.angular.repositories.UserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService
{
	UserRepository userRepository;
	UserPrinciple userPrinciple;
	
	public UserDetailsServiceImpl(UserRepository userRepository)
	{
		this.userRepository = userRepository;
	}
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException
	{
		User user = this.userRepository.findByUserName(username).orElseThrow();
		this.userPrinciple = new UserPrinciple(user.getId(), user.getUserName(), user.getPassword(), null);
		
		return this.userPrinciple;
	}
}
