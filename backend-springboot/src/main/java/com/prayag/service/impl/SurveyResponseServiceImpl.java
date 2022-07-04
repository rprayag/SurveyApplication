package com.prayag.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.prayag.entity.SurveyResponse;
import com.prayag.repo.SurveyResponseRepo;
import com.prayag.service.SurveyResponseService;


@Service
public class SurveyResponseServiceImpl implements SurveyResponseService {
	
	
	@Autowired
	private SurveyResponseRepo surveyResponseRepo;

	@Override
	public List<SurveyResponse> listSurveyResponses() {
		return surveyResponseRepo.findAll();
	}

	@Override
	public SurveyResponse getSurveyResponse(long id) {
		return surveyResponseRepo.findById(id).get();

	}

	@Override
	public SurveyResponse findByUserAndSurveyID(String user,int surveyID)
	{
		return  surveyResponseRepo.findByUserAndSurveyID(user, surveyID);
	}
	
	@Override
	public SurveyResponse save(SurveyResponse surveyResponse) {
		return surveyResponseRepo.save(surveyResponse);
	}

}
