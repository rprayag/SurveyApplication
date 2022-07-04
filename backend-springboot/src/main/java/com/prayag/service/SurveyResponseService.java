package com.prayag.service;

import java.util.List;

import com.prayag.entity.SurveyResponse;

public interface SurveyResponseService {
	
    public List<SurveyResponse> listSurveyResponses();
	
	public SurveyResponse getSurveyResponse(long id);

	public SurveyResponse  save(SurveyResponse surveyResponse);
	
	public SurveyResponse findByUserAndSurveyID(String user,int surveyID);
	

}
