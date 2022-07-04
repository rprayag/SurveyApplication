package com.prayag.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.prayag.entity.User;
import com.prayag.enums.UserRole;
import com.prayag.service.UserDataService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	@Autowired
	private UserDataService userDataService;

	@GetMapping("/user")
	public List<User> show() {
		return userDataService.listUsers();
	}

	@GetMapping("/login/{email}/{password}")
	public String performLogin(@PathVariable("email") String email, @PathVariable("password") String password) {
		return userDataService.verifyCredentials(email, password);
	}

	@GetMapping("/createUser/{email}")
	public String createUser(@PathVariable("email") String email) {
		User p = new User("prayag", "raj", email, "123", UserRole.USER);

		User n = userDataService.createUser(p);

		if (n != null)
			return "success";
		else
			return "unsuccesful";

	}

	@PostMapping("/createNewUser")
	public User createNewUser(@RequestBody User user) {
		System.out.println("User:->>>>>>>>>>>>>>>> " + user);
		
	    if (userDataService.existsByID(user.getEmail())) {
			return null;
		} else {

			User theUser = new User(user.getFirstName(), user.getLastName(), user.getEmail(), user.getPassword(),
					user.getUserType());
		
			return userDataService.createUser(theUser);

		}
	}
	

	

}
