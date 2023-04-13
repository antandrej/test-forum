import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../sessions.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class ForumsComponent implements OnInit{

  sessions: any[] = [];

  constructor(private sessionsService: SessionsService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getSessions();
  }

  async getSessions() {
    try {
      const data = await this.sessionsService.getSessions().subscribe((data) => {
        this.sessions = data;
        console.log(data);
      },
      (err) => (console.log(err)));
    } catch (error) {
      console.log(error);
    }
  }

  async addSession() {
    const newSession = {
      title: (<HTMLInputElement>document.getElementById('title')).value,
      name: (<HTMLInputElement>document.getElementById('name')).value,
    };
    try {
      const data = await this.http.post('/api/sessions', newSession, { responseType: 'text' }).subscribe(
        (res) => console.log(res), 
        (err) => console.log(err),
        () => {
        this.clearFields();
        this.ngOnInit();
        this.closeForm();
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  clearFields() {
    (document.getElementById('title') as HTMLInputElement).value = "";
    (document.getElementById('name') as HTMLInputElement).value = "";
  }

  closeForm() {
    document.getElementById('modal')!.style.display = "none";
  }

}
