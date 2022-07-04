import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Survey, SurveyResponse } from '../models/survey';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FieldConfig } from '../field.interface';

@Injectable({
  providedIn: 'root'
})
export class SurveyDataService {


  


  url = "http://localhost:8080"
  constructor(private http: HttpClient) { }


  retrieveAllSurveys() {
    console.log("3: in survey dataservice: retrieveAllSurveys()")
    return this.http.get<Survey[]>(`${this.url}/surveys`);

  }

  retrieveAllPublishedSurveys() {
    console.log("3: in survey dataservice: retrieveAllSurveys()")
    return this.http.get<Survey[]>(`${this.url}/publishedSurveys`);

  }

  retrieveAllExpiredSurveys() {
    console.log("3: in survey dataservice: retrieveAllSurveys()")
    return this.http.get<Survey[]>(`${this.url}/closedSurveys`);

  }

  createSurvey(survey){
    console.log("In create Surevt");
    console.log(survey)
    console.log(`${this.url}/createSurvey`)
   return this.http.post(
              `${this.url}/createSurvey`
                , survey);

                
  }

  getSurvey(id:number)
  {
    return this.http.get<Survey>(`${this.url}/survey/${id}`)
  }

  publishSurvey(id:number)
  {
    console.log("in publish survey dataServ"+id);
    
    return this.http.get(`${this.url}/publishSurvey/${id}`)
  }

   closeSurvey(id:number)
  {
    console.log("in publish survey dataServ"+id);
    
    return this.http.get(`${this.url}/closeSurvey/${id}`)
  }


  saveSurveyResponse(sureveyResponse:SurveyResponse )
  {
    console.log("In save Surevey Response service");
    console.log(sureveyResponse)
    console.log(`${this.url}/saveSurveyResponse`)
   return this.http.post(
              `${this.url}/saveSurveyResponse`
                , sureveyResponse);
  }


  listAllResponses() {
    console.log("In SurveyDataservice: listAllSurveysResponsed()")
    return this.http.get<SurveyResponse[]>(`${this.url}/listAllResponses`);

  }

  listSurveyResponses(id)
  {
    console.log("In SurveyDataservice: listSurveyResponses(id)")
    return this.http.get<SurveyResponse[]>(`${this.url}/listSurveyResponses/${id}`)
    
  }

  sendEmail(userEmail)
  {
  
    return this.http.get(`${this.url}/sendemail/${userEmail}`)
    
  }

  
}
