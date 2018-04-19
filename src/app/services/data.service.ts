import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import  'rxjs/add/operator/map';
import { Data } from '../entities/data.entity';

@Injectable()
export class DataService {
 private BASE_URL: string= 'http://localhost:3000/api/employees/';
 private BASE_URL1: string= 'http://localhost:3000/api/employee/';
  constructor(
    private http: Http
    
  ) { }
   
  findAll(): Observable<Data[]>{
    return this.http.get(this.BASE_URL)
     .map((res: Response)=>{
       return res.json();
     })
     .catch((error, any)=>{
       return Observable.throw(new Error(error.status));
     });
  }

  update(data:Data){
    let headers = new Headers ({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers:headers});
    let body =JSON.stringify(data);
     return this.http.put(this.BASE_URL1, body,options)
      .map((res: Response)=> res.json());
    }


delete(id: string){
  return this.http.delete(this.BASE_URL1+id)
  .map((res: Response)=> res.json);
  }
public dialogRef: any;
}

