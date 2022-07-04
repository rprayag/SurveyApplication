package com.prayag.service.impl;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.prayag.entity.User;
import com.prayag.enums.UserRole;
import com.prayag.repo.UserRepository;
import com.prayag.service.UserDataService;

@Service
public class UserDataServiceImpl implements UserDataService {

	@Autowired
	private  UserRepository userRepository;
	
	@Override
	public String verifyCredentials(String email, String password) {
		
		try {

			User user = userRepository.getOne(email);
		

			if (user != null) {
				if (password.equals(user.getPassword())) {
					if (user.getUserType() == UserRole.ADMIN)
						return "admin";
					else 
						return "user";
					
				} else
					return "invalid-password";
			} else
				return "invalid-user";
		} 
		catch (EntityNotFoundException e) {
			return "invalid-user";
		
		}
	}

	
	
	
	@Override
	public List<User> listUsers() {

		return userRepository.findAll();
	}
	
	@Override
	public boolean existsByID(String email) {
		return userRepository.existsById(email);
	}




	@Override
	public User createUser(User user) {
		return userRepository.save(user);
	}
	
	





}
