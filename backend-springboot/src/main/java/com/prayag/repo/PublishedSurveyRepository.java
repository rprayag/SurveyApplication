package com.prayag.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.prayag.entity.PublishedSurvey;

@Repository
public interface PublishedSurveyRepository extends JpaRepository<PublishedSurvey,Long> {
	
	

}
