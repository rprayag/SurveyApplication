import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddQuestionComponent } from '../add-question/add-question.component';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Survey, Question } from 'src/app/models/survey';
import { SurveyDataService } from 'src/app/services/survey-data.service';


@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css']
})
export class CreateSurveyComponent implements OnInit {

  surveyForm: FormGroup;

  // survey:Survey
  questionList: Question[] = [];
  emptyQuestion=false;
  errorMessage;  
  today;

  constructor(private surveyDataService: SurveyDataService, private formBuilder: FormBuilder,
    private dialog: MatDialog, private route: Router) {


  }

  ngOnInit(): void {

    this.today = new Date();
    this.initForm();
        


  }

  initForm() {

    let surveyName = "";
    let description = "";
    let endDate = new Date();
    let questions = new FormArray([]);

    this.surveyForm = new FormGroup(
      {
        "surveyName": new FormControl(surveyName, [Validators.required]),
        "description": new FormControl(description, [Validators.required]),
        "endDate": new FormControl("", [Validators.required]),
        "questions": questions
      }
    );

    //this.addQuestion();

  }

  addQuestion() {
    console.log(this.surveyForm);
    this.openDialog(this.surveyForm)

  }






  openDialog(surveyForm: FormGroup) {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "800px";
    dialogConfig.height = "500px";

    dialogConfig.data = surveyForm;

    const dialogRef = this.dialog.open(AddQuestionComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      console.log(data)

      if (!(data == null))
        this.questionList.push(data);
    });

  }

  onSubmit() {

    //  let  survey = new Survey(0,this.surveyForm.controls.surveyName.value,
    //                               this.surveyForm.controls.description.value,
    //                                 this.surveyForm.controls.endDate.value,
    //                                 this.questionList.length,
    //                                 'draft',
    //                                 this.questionList
    //                                   )

    if(this.questionList.length===0){
      this.errorMessage="Please add at least one question"
      this.emptyQuestion=true;


      return;
    }

    let survey = new Survey(0, this.surveyForm.controls.surveyName.value,
                               this.surveyForm.controls.description.value, 
                               this.surveyForm.controls.endDate.value, 
                               this.questionList.length, 
                               this.questionList,
                               'draft');

                          

    
    
    

    console.log("answer");
    console.log(survey);
    console.log("In Json");
    console.log(JSON.stringify(survey));



    let id = this.surveyDataService.createSurvey(survey).subscribe(idd => {
      console.log('id is: ');
      console.log(idd);
      this.route.navigate(['admin/surveyRepo']);

    });

    console.log("completed " + id)
    console.log(id);




  }




}
