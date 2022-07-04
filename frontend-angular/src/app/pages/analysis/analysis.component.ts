import { Component, OnInit } from '@angular/core';
import { Survey, Question, SurveyResponse } from 'src/app/models/survey';
import { SurveyDataService } from 'src/app/services/survey-data.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ResponseAnalysisComponent } from '../response-analysis/response-analysis.component';
import { ExcelServiceService } from 'src/app/services/excel-service.service';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {

  surveyResponses?:SurveyResponse[]=[];
  survey?:Survey[]=[];

  

  constructor(private surveyDataService:SurveyDataService,
              private excelService:ExcelServiceService,
              private dialog: MatDialog,
              private route: Router) { }

  ngOnInit():void{

    this.initializeSurvey();

  }

  initializeSurvey()
  {
    this.surveyDataService.retrieveAllPublishedSurveys().subscribe(data=>{
      console.log();
      this.survey=data;
      
    })
  }


  export() {
    
    this.excelService.exportAsExcelFile(this.survey,"SurveyList");  
  }

  surveyResponseDetails(surveyID)
  {
    console.log(surveyID);
    
    this.surveyDataService.listSurveyResponses(surveyID).subscribe(data=>{
      console.log(data);
      this.surveyResponses=data;
      this.openDialog(data)

    })
  }

  openDialog(surveyResponses) {
    console.log("In open dialog");
    console.log(surveyResponses);
    
    
    const dialogConfig = new MatDialogConfig();

    
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "900px";
    dialogConfig.height = "600px";
    console.log(surveyResponses);
    
    dialogConfig.data = surveyResponses;

    const dialogRef = this.dialog.open(ResponseAnalysisComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
     // console.log(data)


    });

  }

}








  //ngOnInit(): void {
    // this.surveyDataService.getSurvey(1).subscribe(response=>{
    //   console.log(response);
    //   this.survey=response;
    // });

    // this.extractQuestionName(this.survey.questions);

    // console.log(this.labels);
    
 // }

  // public doughnutChartLabels:string[] = ['Question 1', 'Question 2', 'Question 3'];
  // public demodoughnutChartData = [[350, 450, 100],[250, 350, 150],[40,40,20]];
  // public doughnutChartType:string = 'doughnut';

  // extractQuestionName(questions:Question[])
  // {

  // questions.map(question=>{
  //     this.labels.push(question.questionText);
    
  //   })

  //   this.doughnutChartLabels=this.labels;

  // }


 
  // // events
  // public chartClicked(e:any):void {
  //   console.log(e);
  // }
 
  // public chartHovered(e:any):void {
  //   console.log(e);
  // }


