import { Component, OnInit } from '@angular/core';
import sessionsData from "../sessions.json";
import { SessionsService } from '../sessions.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class ForumsComponent implements OnInit{
  sessions: any[] = [];

  constructor(private sessionsService: SessionsService, private route: Router) {}

  ngOnInit(): void {
    this.getSessions();
  }

  getSessions() {
    this.sessionsService.getSessions().subscribe(data => {
      this.sessions = data as any[];
    }, (error: any) => {
      console.log(error);
    });
  }

}
