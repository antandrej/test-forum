import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate{

  constructor(private auth: AuthService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if(this.auth.isAuthenticated()){
          return true;
      }
      else{
          this.router.navigate(['']);
          return false;
      }
  }
}