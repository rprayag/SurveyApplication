import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_EXTENSION = '.xlsx';





@Injectable({
  providedIn: 'root'
})
export class ExcelServiceService {



  constructor() { }

  public exportAsExcelFile(json, fileName): void {

    let n = fileName + EXCEL_EXTENSION;

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    //  const ws: XLSX.WorkSheet =XLSX.utils.aoa_to_sheet(json)

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, n);




  }


}
