import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ManageService } from 'src/app/manage.service';
import { Department } from 'src/app/models/department.model';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {
  DepartmentList:Array<Department> = new Array<Department>();
  EmpList:Array<Employee> = new Array<Employee>();
  ActivateAddEditEmpComp:boolean=false;
  constructor(private service: ManageService) { }
  @Input()
  emp:any;
  id!:number;
  empLastName!:string;
  empName!:string;
  position!:string;
  title!:string;
  departmentId!:number;
  avatar!:string;
  PhotoFilePath!:string;
  ngOnInit(): void {
    this.loadDepList()
  }
  loadDepList()
  {
    this.service.getDepList().subscribe(res =>
    {this.DepartmentList = res;
    this.id=this.emp.id;
    this.empLastName=this.emp.empLastName;
    this.empName=this.emp.empName;
    this.position=this.emp.position;
    this.avatar=this.emp.avatar;
    this.title= this.emp.title;
    this.departmentId=this.emp.departmentId
    this.PhotoFilePath=this.service.PhotoUrl+this.avatar;});
  }
  addEmployee(){
    var val = {empName:this.empName,
              empLastName:this.empLastName,
              position:this.position,
              avatar:this.avatar,
              departmentId:this.departmentId,
              title:this.title
            };

     this.service.addEmployee(val).subscribe(res=>{
       alert(res.toString());
     },
     );
  }

  updateEmployee(){
    var val ={
              id:this.id,
              empName:this.empName,
              empLastName:this.empLastName,
              position:this.position,
              avatar:this.avatar,
              departmentId:this.departmentId,
              title:this.title};

    this.service.updateEmployee(val).subscribe(res=>{
    alert(res.toString());
    });
  }
  deleteClick(id:number){
    if(confirm("Bạn có chắc không?"))
    {
      this.service.deleteEmployee(id).subscribe(data => {
        alert(data.toString())
      })
    }
  }
  uploadPhoto(event:any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);
    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.avatar=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.avatar;
    })
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

