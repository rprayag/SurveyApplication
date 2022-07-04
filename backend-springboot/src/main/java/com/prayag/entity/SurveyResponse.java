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
@Table(name = "SurveyResponse")
@JsonInclude(Include.NON_NULL)
public class SurveyResponse {
	
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private Long id;
	
	@Column
	private String user;

	@Column
	private int surveyID;
	
	@Column
	public String surveyName;

	

	@Column 
	public String[][] answers;
	
	
	


	
	public SurveyResponse(String user, int surveyID, String surveyName, String[][] answers) {
		this.user = user;
		this.surveyID = surveyID;
		this.surveyName = surveyName;
		this.answers = answers;
	}


	public SurveyResponse() {
		
	}
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getSurveyID() {
		return surveyID;
	}

	public void setSurveyID(int surveyID) {
		this.surveyID = surveyID;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public String[][] getAnswers() {
		return answers;
	}

	public void setAnswers(String[][] answers) {
		this.answers = answers;
	}

	public String getSurveyName() {
		return surveyName;
	}

	public void setSurveyName(String surveyName) {
		this.surveyName = surveyName;
	}


	@Override
	public String toString() {
		return "SurveyResponse [id=" + id + ", user=" + user + ", surveyID=" + surveyID + ", surveyName=" + surveyName
				+ ", answers=" + Arrays.toString(answers) + "]";
	}

	

	
	
	
	

	

	
	
}

