import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, Form, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FieldConfig } from 'src/app/field.interface';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Question, Survey } from 'src/app/models/survey';
import { element } from 'protractor';

export interface QuestionType {
  value: string
  viewValue: string
}

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {


  errorMessage;
  emptyOptions=false;

  fg: FormGroup
  optionList: string[] = [];
  survey?:Survey;



  clearInput = '';
  iss: boolean = true;
  questionType;
  newQuestion: Question;
  selectedQuestionType = ""

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

      this.survey=data


  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.fg = new FormGroup({
      questionText: new FormControl("", Validators.required),
      required: new FormControl(false),
      option: new FormControl(""
      ),
      questionType: new FormControl("")
    });


  }

  addOptionControls(questionType, index) {
    this.questionType = questionType;
  }

  addOption() {

    this.optionList.push(this.fg.controls.option.value);
    console.log(this.optionList)
    this.fg.controls.option.setValue("")


  }

  removeOption(item) {
    console.log(item);
    this.optionList = this.optionList.filter(element => element !== item);
    console.log("List>>");
    console.log(this.optionList);

  }

  save() {
    console.log(this.fg.controls.questionText.value)
    console.log(this.questionType);

    if(this.optionList.length===0&&(this.fg.controls.questionType.value==="checkbox"||this.fg.controls.questionType.value==="radiobutton"))
    {
      this.errorMessage="Please Add at least one Option "
      this.emptyOptions=true;
      return;
    }

    this.newQuestion = new Question(this.survey.id, this.fg.controls.questionText.value,
      this.fg.controls.required.value,
      this.fg.controls.questionType.value, this.optionList
    );
    

    console.log(this.newQuestion);


    this.dialogRef.close(this.newQuestion);
  }



  close() {
    this.dialogRef.close();
  }

}
