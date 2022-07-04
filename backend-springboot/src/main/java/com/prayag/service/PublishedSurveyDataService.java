package com.prayag.service;

import java.util.List;

import com.prayag.entity.PublishedSurvey;

public interface PublishedSurveyDataService {

	public List<PublishedSurvey> listSurveys();

	public PublishedSurvey getSurvey(long id);

	public PublishedSurvey save(PublishedSurvey publishedSurvey);

}
