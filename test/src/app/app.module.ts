import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForumsComponent } from './sessions/sessions.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailSessionComponent } from './detail-session/detail-session.component';

@NgModule({
  declarations: [
    AppComponent,
    ForumsComponent,
    LoginComponent,
    MainComponent,
    DetailSessionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
