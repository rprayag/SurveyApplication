import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { SurveyResponse } from 'src/app/models/survey';
import { AnswerBoxComponent } from '../answer-box/answer-box.component';
import { ExcelServiceService } from 'src/app/services/excel-service.service';

@Component({
  selector: 'app-response-analysis',
  templateUrl: './response-analysis.component.html',
  styleUrls: ['./response-analysis.component.css']
})
export class ResponseAnalysisComponent implements OnInit {

  surveyName: string = "";
  surveyResponses?: SurveyResponse[] = [];
  searchText;

  constructor(private dialog: MatDialog,
              private exportToExcel: ExcelServiceService,
              private dialogRef: MatDialogRef<ResponseAnalysisComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    console.log(data);

    this.surveyResponses = data
    this.surveyName = this.surveyResponses[0].surveyName;
  }



  ngOnInit(): void {
    console.log("In ResponseAnalysis ngOnInit()");

    console.log(this.surveyResponses);

  }

  export() {

  let answer: [][] = [];
      this.exportToExcel.exportAsExcelFile(this.surveyResponses,"SurveyResponses")
  }


  viewAnswers(id) {
    console.log("In view details");
    this.surveyResponses[id]
    console.log(this.surveyResponses[id]);
    this.openDialog(this.surveyResponses[id])

  }
  openDialog(response) {
    console.log("In open dialog");
    console.log(response);


    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "600px";
    dialogConfig.height = "400px";
    console.log(response);

    dialogConfig.data = response;

    const dialogRef = this.dialog.open(AnswerBoxComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      // console.log(data)


    });

  }


}
