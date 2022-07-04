import { Pipe, PipeTransform } from '@angular/core';
import { SurveyResponse } from '../models/survey';

@Pipe({
  name: 'responseFilter'
})
export class ResponseFilterPipe implements PipeTransform {

  transform(surveyResponses:SurveyResponse[], searchText:string): unknown {
    if(!surveyResponses) return [];
    if(!searchText) return surveyResponses;

    searchText.toLocaleLowerCase();

    return surveyResponses.filter(response=>{
      return response.user.toLocaleLowerCase().includes(searchText);
    });
  }

}
