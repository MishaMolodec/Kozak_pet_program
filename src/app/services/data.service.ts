import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import  'rxjs/add/operator/map';
import { Data } from '../entities/data.entity';
import { catchError, skip } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';


@Injectable()
export class DataService {
 private BASE_URL: string= 'http://localhost:3000/api/employees/';
 
  constructor(
    private http: HttpClient
    
    
  ) { }
   
  
  findAll({skip,limit}): Observable<any>{
    const options = { params: new HttpParams().set('skip',skip).set('limit', limit) };
    console.log("shit",skip,limit);
    return this.http.get(this.BASE_URL, options);
   
  }

  update(id:any, data){
    console.log(id + 'updated');
    return this.http.put(this.BASE_URL+id,data)
  }
    


delete(id: any){
  console.log(id + "deleted" );
  return this.http.delete(this.BASE_URL+id)
  
  }

create(data:Data){
  console.log(data);
    return this.http.post(this.BASE_URL, data)
  }

}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};