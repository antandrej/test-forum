import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../services/sessions.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class ForumsComponent implements OnInit{

  sessions: any[] = [];

  addSessionForm!: FormGroup;

  constructor(private sessionsService: SessionsService, private http: HttpClient, private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.getSessions();
    this.addSessionForm = this.fb.group({
      title: ['', Validators.required],
      name: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  async getSessions() {
    try {
      const data = await this.sessionsService.getSessions().subscribe((data) => {
        this.sessions = data;
      },
      (err) => (console.log(err)));
    } catch (error) {
      console.log(error);
    }
  }

  async addSession(form: FormGroup) {
    const newSession = {
      title: form.value.title,
      name: form.value.name,
      time: form.value.time
    };
    try {
      const data = await this.sessionsService.addSession(newSession).subscribe(
        (res) => console.log(res), 
        (err) => console.log(err),
        () => {
        this.clearFields(this.addSessionForm);
        this.ngOnInit();
        this.closeForm();
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  getSession(id: any){
    this.router.navigate(['sessions/', id])
  }

  clearFields(form: FormGroup) {
    form.value.title = "";
    form.value.name = "";
    form.value.time = "";
  }

  closeForm() {
    document.getElementById('modal')!.style.display = "none";
  }

}
