package com.prayag.entity;

import javax.persistence.Column;


public class Validator {

	@Column(name = "name")
	private String name;
	
	@Column(name = "validator")
	private String validator;
	
	@Column(name = "messsage")
	private String message;
	
	
}
