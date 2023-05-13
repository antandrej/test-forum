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
}
