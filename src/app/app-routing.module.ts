import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { AddEditEmpComponent } from './employees/add-edit-emp/add-edit-emp.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {
    path:'login',component:LoginComponent
  },
  {
    path:'department',component:DepartmentsComponent
  },
  {
    path:'employee/:id',component:EmployeesComponent
  },
  {
    path:'add_emp',component:AddEditEmpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
