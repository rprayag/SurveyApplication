package com.prayag.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "publishedsurvey")
public class PublishedSurvey {
	
	@Id
	@Column
	private Long id;
//
//	@Column(name="survey")
//	private Survey survey;
	
	

//	public PublishedSurvey(Long id, Survey survey) {
//		this.id = id;
//		this.survey = survey;
//	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	
		

}
