import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Survey, SurveyResponse } from 'src/app/models/survey';
import { SurveyDataService } from 'src/app/services/survey-data.service';

@Component({
  selector: 'app-answer-box',
  templateUrl: './answer-box.component.html',
  styleUrls: ['./answer-box.component.css']
})
export class AnswerBoxComponent implements OnInit {

  response:SurveyResponse
  survey?:Survey

  constructor(private dialogRef: MatDialogRef<AnswerBoxComponent>,private surveyDataService: SurveyDataService,
    @Inject(MAT_DIALOG_DATA) data) {

      this.response=data

     }

  ngOnInit(): void {

    this.surveyDataService.getSurvey(this.response.surveyID).subscribe(data=>{
      console.log(data);
      this.survey=data;
      
    })

  }

  

}


