import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  enableEdit:boolean = false;
  employeeList:any = [];


  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {

    this.employeeService.getEmployeeDetails().subscribe(res => {

      this.employeeList = res;
    });

  }
  onEditEmployee(editEmployee){

    this.employeeService.updateEmployee(editEmployee.value).subscribe(res => {

      this.ngOnInit();
    });
    editEmployee.reset();
    this.enableEdit = !this.enableEdit;

    }
    onEnableEdit(i){
      this.enableEdit = !this.enableEdit
    }
    onDelete(id){
      this.employeeService.deleteEmployee(id).subscribe(res => {

        this.ngOnInit();
      });

    }

}
