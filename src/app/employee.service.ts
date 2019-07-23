import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  _baseURL = "https://iadap-json-server-employeelist.herokuapp.com/employeeList/";

  constructor(private http: HttpClient) { }

  getEmployeeDetails() {
    return this.http.get(this._baseURL);

  }
  postEmployeeDetail(add){
    return this.http.post(this._baseURL, add);

  }
  updateEmployee(update){
    return this.http.put(this._baseURL+update.id, update);
  }
  deleteEmployee(detail){

    return this.http.delete(this._baseURL+detail);
    // return this.http.delete(this._baseURL+detail).pipe(map((response: any) => response.json()));
  }
}
