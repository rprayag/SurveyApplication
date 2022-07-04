package com.prayag.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.prayag.entity.Survey;
import com.prayag.repo.SurveyRepository;
import com.prayag.service.SurveyDataService;

@Service
public class SurveyDataServiceImpl implements SurveyDataService{

	@Autowired
	private SurveyRepository surveyRepository;
	
	
	
	//draft survey
	
	@Override
	public List<Survey> listSurveys() {
		return surveyRepository.findAll();
	}
	
	public Survey  save(Survey survey)
	{
		return surveyRepository.save(survey);
	}

	@Override
	public Survey getSurvey(long id) {
		return surveyRepository.findById(id).get();
	}
		
}
