import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/models/survey';
import { SurveyDataService } from 'src/app/services/survey-data.service';

@Component({
  selector: 'app-list-surveys',
  templateUrl: './list-surveys.component.html',
  styleUrls: ['./list-surveys.component.css']
})
export class ListSurveysComponent implements OnInit {

  surveys:Survey[]=[];
  



  constructor(private surveyDataService:SurveyDataService) { }

  ngOnInit(): void {
    this.refreshSurveys();
    console.log(this.surveys);

  }

  refreshSurveys(){
    this.surveyDataService.retrieveAllPublishedSurveys().subscribe(
      response => {
        console.log(response);
        this.surveys = response;
      }
    )
  }

}
