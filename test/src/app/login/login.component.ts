import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';

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

  constructor(private _usersService: UsersService, private auth: AuthService, private route: Router) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this._usersService.getUsers().subscribe(data => {
      this.users = data as any[];
    }, (error: any) => {
      console.log(error);
    });
  }

  public login(){
    this.user = this.users.find(user => user.username === this.username && user.password === this.password);
    if (this.user) {
      this.auth.login();
      this.route.navigate(['main']);
      this._usersService.user = this.user
    } else {
      alert("Invalid username or password!");
    }
  }

}