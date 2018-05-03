import {Component, OnInit, Input} from '@angular/core';
import  {DataService} from '../services/data.service';
import { AddChangeEmployeersComponent } from '../add-change-employeers/add-change-employeers.component';
import {NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit {
  closeResult: string;
  skip: number = 0;
 total: number;
 limit: number = 5;

data : any[];

  constructor( private dataService: DataService,private modalService: NgbModal
  ) {   }



  ngOnInit() {
    this.loadData();

  }

 recalc({skip,limit}){
   this.skip = skip;
   this.limit = limit;
   this.loadData();

 }

loadData(): void {


  this.dataService.findAll({limit:this.limit, skip: this.skip}).subscribe(
    ({data, total})=>{
      // console.log('DATA', res);
      this.data = data;
      this.total = total;
      console.log(total, data);
    },
    error => {
       console.log(error);
    }
  );
}

openAddDialog(): void {
  let dialogRef = this.modalService.open(AddChangeEmployeersComponent, {});

  dialogRef.result.then(result => {
    if(result){
      this.loadData();
    }
   });


}

openUpdateDialog(data):void{
  let dialogRef = this.modalService.open(AddChangeEmployeersComponent);

  dialogRef.componentInstance.data = data;
  dialogRef.result.then(result => {
    if(result){
      this.loadData();
    }
  });
  }


 delete(id){
   this.dataService.delete(id).subscribe(()=>{
     this.skip = 0;
     this.loadData();
   });
 }
}


