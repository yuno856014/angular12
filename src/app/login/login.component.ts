import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ManageService } from '../manage.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public loginObj = new User();
  constructor(private fb:FormBuilder,
              private http:HttpClient,
              private router: Router,
              private service:ManageService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName:["",Validators.compose([Validators.required])],
      password:["",Validators.required]
    })
  }
  login()
  {
    this.loginObj.userName = this.loginForm.value.userName;
    this.loginObj.password = this.loginForm.value.password;
    this.service.login(this.loginObj)
    .subscribe(res => {
      alert(res.message);
      this.router.navigate(['employee/1']);
    })
  }
}
