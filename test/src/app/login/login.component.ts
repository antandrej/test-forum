import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

  public users: any[] = [];
  public username: any;
  public password: any;

  public user: any;

  loginForm!: FormGroup;

  constructor(private _usersService: UsersService, private auth: AuthService, private route: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.getUsers();
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  getUsers() {
    this._usersService.getUsers().subscribe(data => {
      this.users = data as any[];
    }, (error: any) => {
      console.log(error);
    });
  }

  public login(form: FormGroup) {
    this.user = this.users.find(user => user.username === form.value.username && user.password === form.value.password);
    if (this.user) {
      this.auth.login();
      this.route.navigate(['main']);
      this._usersService.user = this.user;
    }
    else {
      alert("Invalid username or password!");
    }
  }
}