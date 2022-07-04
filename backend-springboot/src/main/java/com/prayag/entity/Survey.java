package com.prayag.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@Entity
@Table(name = "survey")
@JsonInclude(Include.NON_NULL)
public class Survey {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private Long id;

	@Column
	private String surveyName;

	@Column
	private String description;

	@Column(name = "noq")
	private int noq;

	@Column(name = "endDate")
	private Date endDate;

	@Column(name = "status")
	private String status;

	@Column
	private String link;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "survey_id")
	private List<Question> questions;

	public Survey(String surveyName, String description, int noq, Date endDate, String status, String link,
			List<Question> questions) {
		this.surveyName = surveyName;
		this.description = description;
		this.noq = noq;
		this.endDate = endDate;
		this.status = status;
		this.link = link;
		this.questions = questions;
	}

	public Survey() {
	}

	public void add(Question question) {

		if (question == null) {
			questions = new ArrayList<>();
		}

		questions.add(question);

	}

	@Override
	public String toString() {
		return "Survey [id=" + id + ", surveyName=" + surveyName + ", description=" + description
				+ ", number_of_question=" + noq + ", endDate=" + endDate + ", link=" + link + ", questions=" + questions
				+ "]";
	}

	public List<Question> getQuestions() {
		return questions;
	}

	public void setQuestions(List<Question> questions) {
		this.questions = questions;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSurveyName() {
		return surveyName;
	}

	public void setSurveyName(String surveyName) {
		this.surveyName = surveyName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getNoq() {
		return noq;
	}

	public void setNoq(int noq) {
		this.noq = noq;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
