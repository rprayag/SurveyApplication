import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './parts/menu/menu.component';
import { ErrorComponent } from './pages/error/error.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { RegisterComponent } from './pages/register/register.component';
import { ListSurveysComponent } from './pages/list-surveys/list-surveys.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { CreateSurveyComponent } from './pages/create-survey/create-survey.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { SelectComponent } from './components/select/select.component';
import { DateComponent } from './components/date/date.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { NewSurveyComponent } from './pages/new-survey/new-survey.component';
import { TakeSurveyComponent } from './pages/take-survey/take-survey.component';
import { AddSurveyQuestionComponent } from './pages/add-survey-question/add-survey-question.component';
import { AddQuestionComponent } from './pages/add-question/add-question.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AutoFocusDirective } from './auto-focus.directive';
import { SurveyRepsitoryComponent } from './pages/survey-repsitory/survey-repsitory.component';
import { AnalysisComponent } from './pages/analysis/analysis.component';
import { ChartsModule } from 'ng2-charts';
import { ResponseAnalysisComponent } from './pages/response-analysis/response-analysis.component';
import { AnswerBoxComponent } from './pages/answer-box/answer-box.component';
import { ResponseFilterPipe } from './myFilter/response-filter.pipe';
import { AddadminComponent } from './pages/addadmin/addadmin.component';
import { SurveyChartsComponent } from './pages/survey-charts/survey-charts.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ErrorComponent,
    LogoutComponent,
    RegisterComponent,
    ListSurveysComponent,
    AdminHomeComponent,
    CreateSurveyComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    NewSurveyComponent,
    TakeSurveyComponent,
    AddSurveyQuestionComponent,
    AddQuestionComponent,
    AutoFocusDirective,
    SurveyRepsitoryComponent,
    AnalysisComponent,
    ResponseAnalysisComponent,
    AnswerBoxComponent,
    ResponseFilterPipe,
    AddadminComponent,
    SurveyChartsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,  
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    AddQuestionComponent,
    ResponseAnalysisComponent
    ]
})
export class AppModule { }
