package com.prayag.service;

import java.util.List;

import com.prayag.entity.User;

public interface UserDataService {

	public String verifyCredentials(String email, String password);

	public List<User> listUsers();

	public boolean existsByID(String email);

	public User createUser(User user);

}
