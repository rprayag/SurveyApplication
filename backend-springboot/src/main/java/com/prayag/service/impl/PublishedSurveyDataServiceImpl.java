package com.prayag.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.prayag.entity.PublishedSurvey;
import com.prayag.repo.PublishedSurveyRepository;
import com.prayag.service.PublishedSurveyDataService;

@Service
public class PublishedSurveyDataServiceImpl implements PublishedSurveyDataService {

	@Autowired 
	private PublishedSurveyRepository publishedSurveyRepository;
	
	
	@Override
	public List<PublishedSurvey> listSurveys() {
		return publishedSurveyRepository.findAll();
	}

	@Override
	public PublishedSurvey getSurvey(long id) {
		
		return publishedSurveyRepository.findById(id).get();
	}

	@Override
	public PublishedSurvey save(PublishedSurvey publishedSurvey) {
		return publishedSurveyRepository.save(publishedSurvey);
	}

	

	
	


}
