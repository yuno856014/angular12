import { Component, OnInit } from '@angular/core';
import { ManageService } from '../manage.service';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-dropdown-dep',
  templateUrl: './dropdown-dep.component.html',
  styleUrls: ['./dropdown-dep.component.css']
})
export class DropdownDepComponent implements OnInit {
  constructor(private service:ManageService) { }
  DepartmentList:Array<Department> = new Array<Department>();
  EmpList:Array<Employee> = new Array<Employee>();
  ngOnInit(): void {
     this.service.getDepList().subscribe(res => this.DepartmentList = res)
  }
}
