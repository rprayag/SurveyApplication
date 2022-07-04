import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialog ,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-add-survey-question',
  templateUrl: './add-survey-question.component.html',
  styleUrls: ['./add-survey-question.component.css']
})
export class AddSurveyQuestionComponent implements OnInit {

  public breakpoint: number; // Breakpoint observer code
  public fname: string = `Ramesh`;
  public lname: string = `Suresh`;
  public addCusForm: FormGroup;
  wasFormChanged = false;

  constructor(private fb: FormBuilder,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.addCusForm = this.fb.group({
      IdProof: null,
      firstname: [this.fname, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      lastname: [this.lname, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      email: [null, [Validators.required, Validators.email]],
    });
    this.breakpoint = window.innerWidth <= 600 ? 1 : 2; // Breakpoint observer code
  }

  
  // public onAddCus(): void {
  //   this.markAsDirty(this.addCusForm);
  // }

  // public onResize(event: any): void {
  //   this.breakpoint = event.target.innerWidth <= 600 ? 1 : 2;
  // }
  // private markAsDirty(group: FormGroup): void {
  //   group.markAsDirty();
  //   // tslint:disable-next-line:forin
  //   for (const i in group.controls) {
  //     group.controls[i].markAsDirty();
  //   }
  // }

  // formChanged() {
  //   this.wasFormChanged = true;
  // }

}
