import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuardService } from './services/login-guard.service';
import { MainComponent } from './main/main.component';
import { DetailSessionComponent } from './detail-session/detail-session.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'main', component: MainComponent, canActivate: [LoginGuardService]},
  { path: 'sessions/:id', component: DetailSessionComponent },
  { path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
