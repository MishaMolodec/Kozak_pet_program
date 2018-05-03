import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pagention',
  templateUrl: './pagention.component.html',
  styleUrls: ['./pagention.component.less']
})
export class PagentionComponent implements OnInit {
@Input()limit: number;
@Input()total: number;
@Output()pageQuery: EventEmitter<any>= new EventEmitter();

pages: number[]= [];
currentPage: number = 0;

private createPages() {

  const pagesLength = Math.ceil(this.total/this.limit);
  console.log(this.total,this.limit)
  for(let i =0; i< pagesLength; i++){
    this.pages.push(i+1);
  }
  console.log(this.pages);
}

public getCurrentPage(pages){


}

public onClick(index){
 this.currentPage = index;
  this.pageQuery.emit({skip: index * this.limit, limit: this.limit})
  // console.log(index, this.limit);
}

hoverEvent(e){
  alert(e);
}
  constructor() { }

  ngOnInit() {
    this.createPages();
  }

}
