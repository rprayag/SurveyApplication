package com.prayag.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.prayag.service.MailService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class EmailController {

	@Autowired MailService mailService;

	@GetMapping("/sendemail/{user}")
	public String sendEmail(@PathVariable String user) {
			
		mailService.sendEmail(user);
		
		return "Email sent successfully";

	}

}
