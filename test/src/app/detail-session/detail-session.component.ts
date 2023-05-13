import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../services/sessions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-session',
  templateUrl: './detail-session.component.html',
  styleUrls: ['./detail-session.component.css']
})
export class DetailSessionComponent implements OnInit{

  constructor(private sessionsService: SessionsService, private route: ActivatedRoute) { }

  session: any[] = [];
  id: any;


  ngOnInit(): void {
    this.getSession();
  }

  async getSession() {
    this.id = this.route.snapshot.paramMap.get('id');
    try {
      const data = await this.sessionsService.getSession(this.id).subscribe((data) => {
        this.session = data;
      },
      (err) => (console.log(err)));
    } catch (error) {
      console.log(error);
    }
  }

}