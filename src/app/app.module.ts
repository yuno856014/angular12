import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddEditEmpComponent } from './employees/add-edit-emp/add-edit-emp.component';
import { ManageService } from './manage.service';
import { DepartmentsComponent } from './departments/departments.component';
//Module khác
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { PopupModule } from "@progress/kendo-angular-popup";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { DropdownDepComponent } from './dropdown-dep/dropdown-dep.component';
import { LoginComponent } from './login/login.component';
import { TreeListModule } from "@progress/kendo-angular-treelist";


@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    EmployeesComponent,
    AddEditEmpComponent,
    DropdownDepComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GridModule,
    ButtonsModule,
    TreeListModule,
    PopupModule,
    DropDownsModule,
    BrowserAnimationsModule
  ],
  providers: [ManageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
