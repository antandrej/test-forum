import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../sessions.service';

@Component({
  selector: 'sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class ForumsComponent implements OnInit{

  sessions: any[] = [];

  constructor(private sessionsService: SessionsService) {
  }

  ngOnInit(): void {
    this.getSessions();
  }

  async getSessions() {
    try {
      const data = await this.sessionsService.getSessions().toPromise();
      this.sessions = data as any[];
      console.log('refreshing');
    } catch (error) {
      console.log(error);
    }
  }

}
