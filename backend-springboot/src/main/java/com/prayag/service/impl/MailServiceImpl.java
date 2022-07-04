package com.prayag.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.prayag.service.MailService;

@Service
public class MailServiceImpl implements MailService {
	
	@Autowired
    JavaMailSender mailSender;

	@Override
	public void sendEmail(String user) {
		
		Runnable r =()->{
			  try {
	 	        	
		        	SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
		        	simpleMailMessage.setTo(user);
		        	simpleMailMessage.setSubject("Survey Response Confirmation");
		        	simpleMailMessage.setText("Your response is subbmiitted. Have a nice day");
		 
		            mailSender.send(simpleMailMessage);
		 
		        } catch (Exception e) {
		            e.printStackTrace();
		        }
		    };
		
		   Thread mailThread = new Thread(r);
		   mailThread.setName("Mailing Thread");
		   mailThread.start();
		    
		    
			
		}
	
	 
	      
	

}
