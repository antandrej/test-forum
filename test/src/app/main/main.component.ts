import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ForumsComponent } from '../sessions/sessions.component'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [ForumsComponent]
})
export class MainComponent {

  constructor(private http: HttpClient, private comp: ForumsComponent) { }

  openForm() {
    document.getElementById('modal')!.style.display = "block";
  }
/*
  closeForm() {
    document.getElementById('modal')!.style.display = "none";
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
        this.comp.getSessions();
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
*/
}
