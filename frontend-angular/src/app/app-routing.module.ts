import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { RouteguardService } from './services/routeguard.service';
import { RegisterComponent } from './pages/register/register.component';
import { ListSurveysComponent } from './pages/list-surveys/list-surveys.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { TakeSurveyComponent } from './pages/take-survey/take-survey.component';
import { CreateSurveyComponent } from './pages/create-survey/create-survey.component';
import { SurveyRepsitoryComponent } from './pages/survey-repsitory/survey-repsitory.component';
import { AnalysisComponent } from './pages/analysis/analysis.component';
import { AddadminComponent } from './pages/addadmin/addadmin.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'surveys',component:ListSurveysComponent},
  {path:'admin',component:AdminHomeComponent},
  {path:'admin/createNewSurvey',component:CreateSurveyComponent},
  {path:'admin/surveyRepo',component:SurveyRepsitoryComponent},
  {path:'admin/surveyAnalysis',component:AnalysisComponent},
  {path:'logout',component:LogoutComponent,canActivate:[RouteguardService]},
  {path:'takeSurvey/:id',component:TakeSurveyComponent},
  {path:'register',component:RegisterComponent},
  {path:'admin/addAdmin',component:AddadminComponent},
  


  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
