import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicFormComponent } from 'src/app/components/dynamic-form/dynamic-form.component';
import { Validators } from '@angular/forms';
import { FieldConfig } from 'src/app/field.interface';
import { Survey } from 'src/app/models/survey';
import { SurveyDataService } from 'src/app/services/survey-data.service';
import { map } from 'rxjs/operators';
import { delay, share } from 'rxjs/operators';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-new-survey',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.css']
})
export class NewSurveyComponent implements OnInit {

  ngOnInit(){
    
  }


}
