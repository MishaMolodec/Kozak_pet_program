import {Component, OnInit, Input} from '@angular/core';
import{FormBuilder} from '@angular/forms';
import  {DataService} from '../services/data.service';
import {NgbActiveModal, NgbDateParserFormatter, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-add-change-employeers',
  templateUrl: './add-change-employeers.component.html',
  styleUrls: ['./add-change-employeers.component.scss']
})
export class AddChangeEmployeersComponent implements OnInit {



  dataForm: any;
  formatter: NgbDateParserFormatter = new Formatter();

  @Input() data;
  // ref: any;
  constructor(public activeModal: NgbActiveModal,
              private formBuilder: FormBuilder,
              private dataService: DataService,) {
  }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({
      fio: this.data && this.data.fio || '',
      birthdata: this.data && this.formatter.parse(this.data.birthdata) || '',
      job: this.data && this.data.job || '',
      salary: this.data && this.data.salary || '',

    });
    console.log(this.data);
  }

  post(event: any) {
    const data = this.dataForm.value;
    data.birthdata = this.formatter.format(data.birthdata);
    this.dataService.create(data).subscribe(() => this.activeModal.close(true));
  }


  put() {
    const data = this.dataForm.value;
    data.birthdata = this.formatter.format(data.birthdata);
    this.dataService.update(this.data._id, data).subscribe(() => this.activeModal.close(true));
    console.log(this.dataForm);
  }


  closeDialog() {
    this.activeModal.close();
  }


}

class Formatter extends NgbDateParserFormatter{
  parse(value: string): NgbDateStruct {
    const date = new Date(value);
    return {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()};
  }

  format(date: NgbDateStruct): string {
    return new Date(date.year, date.month, date.day).toDateString();
  }

}





