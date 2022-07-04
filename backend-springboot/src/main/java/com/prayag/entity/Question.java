package com.prayag.entity;

import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@Entity
@Table(name = "Question")
@JsonInclude(Include.NON_NULL)
public class Question {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int id;

	@Column(name="questionText")
	private String questionText;
	
	
	@Column(name = "required")
	private boolean required;
	
	@Column(name = "questionType")
	private String questionType;
	
	@Column(name = "options")
	private String[] options;
	
	
	
	
	public Question()
	{
		
	}
	

	

	public Question(String questionText, boolean required, String questionType, String[] options) {
		
		this.questionText=questionText;
		this.required=required;
		this.questionType=questionType;
		this.options=options;
	}




	@Override
	public String toString() {
		return "FieldConfig [id=" + id + ", questionText=" + questionText + ", required=" + required + ", questionType="
				+ questionType + ", options=" + Arrays.toString(options) + "]";
	}




	public int getId() {
		return id;
	}




	public void setId(int id) {
		this.id = id;
	}




	public String getQuestionText() {
		return questionText;
	}




	public void setQuestionText(String questionText) {
		this.questionText = questionText;
	}




	public boolean isRequired() {
		return required;
	}




	public void setRequired(boolean required) {
		this.required = required;
	}




	public String getQuestionType() {
		return questionType;
	}




	public void setQuestionType(String questionType) {
		this.questionType = questionType;
	}




	public String[] getOptions() {
		return options;
	}




	public void setOptions(String[] options) {
		this.options = options;
	}
	
	
	

}
