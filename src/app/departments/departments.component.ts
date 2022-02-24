import { Component, OnInit } from '@angular/core';
import { ManageService } from '../manage.service';
import { Department } from '../models/department.model';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  constructor(private service:ManageService) { }

  DepartmentList:Array<Department> = new Array<Department>();

  ngOnInit(): void {
    this.service.getDepList().subscribe(res => this.DepartmentList = res)

  }
}
