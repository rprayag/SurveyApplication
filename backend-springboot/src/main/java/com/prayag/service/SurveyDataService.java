package com.prayag.service;

import java.util.List;

import com.prayag.entity.Survey;

public interface SurveyDataService {
	
	public List<Survey> listSurveys();
	
	public Survey getSurvey(long id);

	public Survey  save(Survey survey);
	
	
}
