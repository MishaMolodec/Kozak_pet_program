import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import  {DataService} from '../services/data.service';
import { Data } from '../entities/data.entity';
import { AddChangeEmployeersComponent } from '../add-change-employeers/add-change-employeers.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.less']
})
export class EmployeeTableComponent implements OnInit {
 
  data: Data[];



  constructor( private dataService: DataService, public dialog: MatDialog,

  ) {   }
    
  
  
  ngOnInit() {
    this.loadData();
  }

 

loadData(): void {
  this.dataService.findAll().subscribe(
    res=>{
      this.data = res;
     
    },
    error => {
       console.log(error);
    }
  );
}

openDialog(): void {
  let dialogRef = this.dialog.open(AddChangeEmployeersComponent, {
 //   width: '100px',
  // height: '100px'
  });

  this.dataService.dialogRef = dialogRef;


  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
   
  });


}

}

    
