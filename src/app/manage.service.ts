import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from './models/department.model';
import { Employee } from './models/employee.model';
@Injectable({
  providedIn: 'root'
})
export class ManageService {
readonly UrlDep = "https://localhost:44338/Department/";
readonly UrlEmp = "https://localhost:44338/Employee/";
readonly PhotoUrl = "https://localhost:44338/Photos/";
readonly LoginUrl = "https://localhost:44338/Login/";



  constructor(private http:HttpClient) { }
  //Danh sách phòng ban
  getDepList() : Observable<Array<Department>>{
return this.http.get<Array<Department>>(this.UrlDep + 'GetAllDepartment');
  }
  // danh sách nhân viên
  getEmpList() : Observable<Array<Employee>>
  {
    return this.http.get<Array<Employee>>(this.UrlEmp + 'gettAllEmp');
  }
  //thêm mới nhân viên
  addEmployee(val:any){
    return this.http.post(this.UrlEmp+'add_emp',val);
  }

  //chỉnh sửa nhân viên
  updateEmployee(val:any){
    return this.http.put(this.UrlEmp+'update_emp',val);
  }
  //Xóa nhân viên
  deleteEmployee(id:number){
    return this.http.delete(this.UrlEmp+'delete_emp/'+ id);
  }
  UploadPhoto(val:any){
    return this.http.post(this.UrlEmp+'SaveFile',val);
  }
  //Login
  login(val:any)
  {
    return this.http.post<any>(this.LoginUrl + 'login',val);
  }
  //danh sách nhân viên theo id
  // getEmpListByDepId(id:number) : Observable<Array<Employee>>
  // {
  //   return this.http.get<Array<Employee>>(this.UrlEmp + 'getAllEmpById/'+id);
  // }
}
