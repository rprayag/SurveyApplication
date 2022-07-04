package com.prayag.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.prayag.entity.Survey;

@Repository
public interface SurveyRepository extends JpaRepository<Survey,Long> {
	
}
