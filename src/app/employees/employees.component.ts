import { Component, OnInit, ViewChild } from '@angular/core';
import { ManageService } from '../manage.service';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  constructor(private service: ManageService) { }
  EmpList:Array<Employee> = new Array<Employee>();
  DepartmentList:Array<Department> = new Array<Department>();
  ModalTitle!:string;
  ActivateAddEditEmpComp:boolean=false;
  emp:any;
  id!:number
  ngOnInit(): void {
    this.service.getEmpList().subscribe(res => this.EmpList = res);
    // this.service.getEmpListByDepId(this.id).subscribe(res => this.EmpList = res);

    this.service.getDepList().subscribe(res => this.DepartmentList = res);

  }

  addClick(){
    this.emp = {
      id: 0 ,
      empLastName:"",
      empName: "",
      position: "",
      avatar: "",
      title: "",
      departmentId: 0
    }
    this.ModalTitle = "Thêm mới nhân viên!"
    this.ActivateAddEditEmpComp = true;
  }
  editClick(item:any)
  {
    console.log(item);
    this.emp=item.dataItem;
    this.ModalTitle="Chỉnh sửa nhân viên!";
    this.ActivateAddEditEmpComp=true;
  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }
  refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this.EmpList=data;
    });
  }
}
