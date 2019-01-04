package com.mk.angular.services;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.mk.angular.repositories.UserRepository;

@Service
public class UserDetailService implements UserDetailsService
{
	UserRepository userRepository;
	
	public UserDetailService(UserRepository userRepository)
	{
		this.userRepository = userRepository;
	}
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException
	{
		return this.userRepository.findByUserName(username).get();
	}
}
