import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ForumsComponent } from '../sessions/sessions.component'
import { SessionsService } from '../services/sessions.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [ForumsComponent]
})
export class MainComponent {

  first: boolean = true;

  constructor(private service: SessionsService) {
  }

  openForm() {
    //this.service.backToFirst(true); ~~~ DATA SERVICE
    document.getElementById('modal')!.style.display = "block";
  }
}