import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicFormComponent } from 'src/app/components/dynamic-form/dynamic-form.component';
import { Survey,SurveyResponse } from 'src/app/models/survey';
import { SurveyDataService } from 'src/app/services/survey-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-take-survey',
  templateUrl: './take-survey.component.html',
  styleUrls: ['./take-survey.component.css']
})
export class TakeSurveyComponent implements OnInit {

  fg?: FormGroup;
  survey?: Survey;
  answer: string[][] = [];
  answerOptionMap: Map<number, string[]> = new Map();



  constructor(private route: ActivatedRoute,
    private surveyDataService: SurveyDataService,
    private userDataService:UserService,
    private router:Router) {

  }

  ngOnInit(): void {

    let id = this.route.snapshot.params['id'];
    this.survey = new Survey(id, "", "", new Date(), 0, [], "");
    this.surveyDataService.getSurvey(id)
      .subscribe(data => {
        console.log(data)
        this.survey = data
        console.log(this.survey);
        this.initForm();
        console.log("#####################");
        console.log(data.questions);
        
        

      }
      );



  }

  initForm() {

    let group = {};
    this.survey?.questions?.forEach(question => {
      if (question.questionType === 'checkbox') {
        let id = question
        console.log("ZZZZZZZZZZZ");
        console.log(question.id);

        this.answerOptionMap.set(question.id, []);
        group[question.questionText] = new FormArray([]);
      }
      else {
        
        if(question.required)
        group[question.questionText] = new FormControl('',Validators.required)
        else{
        group[question.questionText] = new FormControl('')

        }
      }

    })


    console.log("group********:");
    console.log(group);

    console.log("map*******:");
    for (let key of this.answerOptionMap.keys()) {
      console.log(key);
    }


    this.fg = new FormGroup(group);

  }


  onClicked(event:MatCheckboxChange,option, id) {

    if (event.checked) {
      console.log(" :" + option);
      console.log(id);

      this.answerOptionMap.get(id).push(option)
      console.log(this.answerOptionMap.get(id));


    } else {
      console.log("dsa");
      console.log(option);

      var i = this.answerOptionMap.get(id).indexOf(option)

      console.log(i);

      this.answerOptionMap.get(id)[i] = null;
      this.answerOptionMap.get(id).filter(x => !!x)
      // var filtered = this.answerOptionMap.get(id).filter(item=>{
      //   item ==null
      // });
      // console.log(filtered);

      // this.answerOptionMap.set(id,filtered)
      const filterdArray: string[] = this.answerOptionMap.get(id).filter(f => f !== undefined && f !== null)
      console.log(filterdArray);
      this.answerOptionMap.set(id, filterdArray)


      console.log(this.answerOptionMap.get(id));



    }
  }
  onSubmit() {
    let surveyId = this.route.snapshot.params['id'];


    console.log(this.fg.value);

    this.survey?.questions?.forEach(q => {
      console.log(this.fg.controls[q.questionText].value);
      if (q.questionType === 'checkbox') {
        this.answer.push(this.answerOptionMap.get(q.id));
      }
      else{
        let answer:string[]=[];
        answer.push( this.fg.controls[q.questionText].value)
        this.answer.push(answer)
      }
    })

    console.log("**ANSWER**");

    console.log(this.answer);

    let user = this.userDataService.getEmail();

    let surveyName = this.survey?.surveyName;
    console.log(surveyName);
    
    let surveyResponse:SurveyResponse = new SurveyResponse(0,surveyId,surveyName,user,this.answer);
    


    this.surveyDataService.saveSurveyResponse(surveyResponse).subscribe(data=>{
      console.log(data);
      if(data===true){
      alert("Your Response is submitted thankyou.")
        let user = this.userDataService.getEmail();
        this.surveyDataService.sendEmail(user).subscribe(data=>{
          console.log(data);
        })
        this.router.navigate(['surveys']);
        
      }
      else{
      alert("Your have already taken this survey .")
      this.router.navigate(['surveys']);


      }
    })
    this.answer = [];
  }
}
