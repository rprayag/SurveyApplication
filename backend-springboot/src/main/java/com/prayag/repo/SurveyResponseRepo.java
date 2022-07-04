package com.prayag.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.prayag.entity.SurveyResponse;

public interface SurveyResponseRepo extends JpaRepository<SurveyResponse, Long> {

	@Query("FROM SurveyResponse WHERE user = ?1 AND surveyID = ?2 ")
	SurveyResponse findByUserAndSurveyID(String user,int surveyID);
	
	
	

}
