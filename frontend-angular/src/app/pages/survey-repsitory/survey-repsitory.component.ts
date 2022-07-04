import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/models/survey';
import { SurveyDataService } from 'src/app/services/survey-data.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-repsitory',
  templateUrl: './survey-repsitory.component.html',
  styleUrls: ['./survey-repsitory.component.css']
})
export class SurveyRepsitoryComponent implements OnInit {

  draftSurveys: Survey[] = [];
  publishedSurveys: Survey[] = [];
  expiredSurveys: Survey[] = [];





  constructor(private surveyDataService: SurveyDataService,
              private router: Router) { }

  ngOnInit(): void {

    this.refreshDraftSurveys();
    this.refreshPublishedSurveys();
    this.refreshExpiredSurveys();
  }

  refreshDraftSurveys() {
    this.surveyDataService.retrieveAllSurveys().subscribe(
      response => {
        console.log(response);
        this.draftSurveys = response;
      }
    )
  }

  refreshPublishedSurveys() {
    this.surveyDataService.retrieveAllPublishedSurveys().subscribe(
      response => {
        console.log(response);
        this.publishedSurveys = response;
      }
    )
  }
  refreshExpiredSurveys() {
    this.surveyDataService.retrieveAllExpiredSurveys().subscribe(
      response => {
        console.log(response);
        this.expiredSurveys=response;
      }
    )
  }

  

  

  publishSurvey(id:number)
  {
    console.log(id);
    this.surveyDataService.publishSurvey(id).subscribe(response=>{
        console.log(response);
        this.ngOnInit();
    });

  }

  closeSurvey(id:number)
  {
    console.log(id);
    this.surveyDataService.closeSurvey(id).subscribe(response=>{
        console.log(response);
        this.ngOnInit();
    });

  }

}
