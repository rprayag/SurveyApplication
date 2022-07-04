import { FieldConfig } from '../field.interface';
import { Injectable } from '@angular/core';

export class User{

    
    constructor(
        
        public firstName:string,
        public lastName: string,
        public email: string,
        public password:string,
        public userType:UserType
    ) {}
}

export enum UserType {
    ADMIN,
    USER
    
  }


export class Survey {

    constructor(
        public id: number,
        public surveyName:string,
        public description: string,
        public endDate: Date,
        public noq:number,
        public questions: Question[],
        public status:string
    ) {}
}

export class Question {
   
   constructor(
    public id: number,
    public questionText:string,
    public required:boolean,
    public questionType:string,
    public options:string[]
   ){}
}
// export class Answer {

//     constructor(public id:number,
//         public answers:string[]
//         ){}

// }

export class SurveyResponse{
    constructor(
        public id:number,
        public surveyID:number,
        public surveyName:string,
        public user:string,
        public answers:string[][]
        ){}
}
