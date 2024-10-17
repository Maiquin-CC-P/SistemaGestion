import { Component } from '@angular/core';
import { TableListComponent } from "../../table-list/table-list.component";
import * as xls from 'xlsx';

@Component({
  selector: 'app-load-file',
  standalone: true,
  imports: [TableListComponent],
  templateUrl: './load-file.component.html',
  styleUrl: './load-file.component.scss'
})
export class LoadFileComponent {
  inputData: any;
  
  readExcelFile(e:any){
    const target = e.target.files[0];
    //if (target.files.length !== 1) throw new Error('Subir solo un archivo...');
    let reader = new FileReader();
    
    reader.readAsArrayBuffer(target);
    reader.onload =()=>{
      let data = reader.result;
      let workbook = xls.read(data,{type:'array'});
      const sheetname = workbook.SheetNames[0];
      const sheet1 = workbook.Sheets[sheetname];
      this.inputData = xls.utils.sheet_to_json(sheet1,{header:1,raw:false});
      // console.log(this.inputData);
      // let x = this.inputData.slice(1);
      // console.log(x);

      console.log(e.target.files.length);
      // console.log(e.target.files[0].name, e.target.files[0].size, e.target.files[0].type);
      console.log(this.inputData);
      console.log(e.target.files[0]);
    }
  }
}
