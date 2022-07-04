package com.prayag.api;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.prayag.entity.SurveyResponse;
import com.prayag.service.SurveyResponseService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@JsonInclude(Include.NON_NULL)
public class SurveyResponseController {

	@Autowired
	private SurveyResponseService surveyResponseService;
	
	

	@PostMapping("/saveSurveyResponse")
	public boolean saveSurveyResponse(@RequestBody SurveyResponse surveyResponse) {

		System.out.println("->>>>>>>>>>>>>>: " + surveyResponse);
		System.out.println("-answer>>>>>>>" + surveyResponse.getAnswers());

		SurveyResponse sr = surveyResponseService.
				findByUserAndSurveyID(surveyResponse.getUser()	,surveyResponse.getSurveyID());
		
		System.out.println("->>>>>findByUserAndSurveyID>>>: "+sr);
		
		if(sr!=null)
		{
			return false;
		}

		else
			
		{
			
		SurveyResponse theSurveyResponse = new SurveyResponse(surveyResponse.getUser(),
				                                              surveyResponse.getSurveyID(), 
				                                              surveyResponse.getSurveyName(),
				                                              surveyResponse.getAnswers());
				
			
		System.out.println("->>>>>>>>>>>>>>: " + theSurveyResponse);

		SurveyResponse savedSurveyResponse = surveyResponseService.save(theSurveyResponse);
		System.out.println("with id : " + savedSurveyResponse.getId());

		return true;
		}
	}
	
	@GetMapping("/listAllResponses")
	public List<SurveyResponse> listAllSurveyResponses()
	{
		return surveyResponseService.listSurveyResponses();
	}
	
	@GetMapping("/listSurveyResponses/{surveyID}")
	public List<SurveyResponse> listSurveyResponses(@PathVariable  int surveyID)
	{
		System.out.println("surveyId: "+surveyID);
		List<SurveyResponse> groupResponsesBySurveyName=  surveyResponseService.listSurveyResponses();
		System.out.println("List ALL:"+groupResponsesBySurveyName);
		
		System.out.println("sorted:"+ groupResponsesBySurveyName.stream().filter(p -> !(p.getSurveyID()==surveyID))
				.collect(Collectors.toList()));
		
		return  groupResponsesBySurveyName.stream().filter(p -> p.getSurveyID()==surveyID)
				.collect(Collectors.toList());
	}
	
	

}

















