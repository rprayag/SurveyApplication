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
import com.prayag.entity.Survey;
import com.prayag.service.PublishedSurveyDataService;
import com.prayag.service.SurveyDataService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@JsonInclude(Include.NON_NULL)
public class SurveyController {

	@Autowired
	private SurveyDataService surveyDataService;

	@Autowired
	PublishedSurveyDataService publishedSurveyDataService;

	@PostMapping("/createSurvey")
	public long createSurvey(@RequestBody Survey survey) {
		
		System.out.println("->>>>>survey: " +survey);

		Survey theSurvey = new Survey(survey.getSurveyName(), survey.getDescription(), survey.getNoq(),
				survey.getEndDate(), survey.getStatus(), survey.getLink(), survey.getQuestions());
		

		Survey savedSurvey = surveyDataService.save(theSurvey);
		System.out.println("with id : " + savedSurvey);
		return savedSurvey.getId();

	}

	@GetMapping("/survey/{id}")
	public Survey getSurvey(@PathVariable long id) {

		return surveyDataService.getSurvey(id);
	}

	@GetMapping("/surveys")
	public List<Survey> getSurveys() {
		return surveyDataService.listSurveys().stream().filter(p -> p.getStatus().equals("draft"))
				.collect(Collectors.toList());
	}

	// published

	@GetMapping("/publishSurvey/{id}")
	public boolean publishSurvey(@PathVariable long id) {

		Survey theSurvey = surveyDataService.getSurvey(id);
		theSurvey.setStatus("published");
		theSurvey.setLink("http://localhost:4200/takeSurvey/" + id);

		surveyDataService.save(theSurvey);

		return true;

	}

	@GetMapping("/publishedSurveys")
	public List<Survey> getPublishedSurveys() {
		return surveyDataService.listSurveys().stream().filter(p -> p.getStatus().equals("published"))
				.collect(Collectors.toList());
	}
	
	//closed

	@GetMapping("/closeSurvey/{id}")
	public boolean closeSurvey(@PathVariable long id) {

		Survey theSurvey = surveyDataService.getSurvey(id);
		theSurvey.setStatus("deleted");
		surveyDataService.save(theSurvey);
		return true;

	}
	
	@GetMapping("/closedSurveys")
	public List<Survey> getClosedSurveys() {
		return surveyDataService.listSurveys().stream().filter(p -> p.getStatus().equals("deleted"))
				.collect(Collectors.toList());
	}

}
