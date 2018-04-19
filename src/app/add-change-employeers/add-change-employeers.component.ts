import { Component, OnInit, Inject } from '@angular/core';
import{ FormBuilder} from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import  {DataService} from '../services/data.service';
import { Data } from '../entities/data.entity';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-change-employeers',
  templateUrl: './add-change-employeers.component.html',
  styleUrls: ['./add-change-employeers.component.less']
})
export class AddChangeEmployeersComponent implements OnInit {
 
  dataForm: any;
  ref: any;
  constructor(
    public dialogRef: MatDialogRef<AddChangeEmployeersComponent>,
    @Inject(MAT_DIALOG_DATA) 
    
    public data: any,

    private formBuilder: FormBuilder,
    private dataService: DataService,
  


 
  ) { }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({
      _id: '',
      fio: '',
      birthdata: 0,
      job:'',
      salary: 0

    });
        console.log(this.dataService);
  }
save(event: any){
  this.dataService.update(this.dataForm.value).subscribe(data=>{
    alert('Success');
  })
}
delete(event: any){
  this.dataService.delete(this.dataForm.value._id).subscribe(data=>{
    alert('Success');
  })

  }



  onNoClick(event: any) {
    console.log(this.dataService.dialogRef);
    this.dataService.dialogRef.close();
  }

}




