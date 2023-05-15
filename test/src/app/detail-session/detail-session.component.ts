import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../services/sessions.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail-session',
  templateUrl: './detail-session.component.html',
  styleUrls: ['./detail-session.component.css']
})
export class DetailSessionComponent implements OnInit {

  constructor(private sessionsService: SessionsService, private route: ActivatedRoute, private fb: FormBuilder) { }

  session: any[] = [];
  id: any;

  editSessionForm!: FormGroup;
  initialFormValue: any;

  ngOnInit(): void {
    this.getSession();

    this.editSessionForm = this.fb.group({
      title: ['', Validators.required],
      name: ['', Validators.required],
      time: ['', Validators.required]
    });

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

  openForm(form: FormGroup) {
    document.getElementById('modal')!.style.display = "block";
    form.patchValue({
      title: this.session[0].title,
      name: this.session[0].name,
      time: this.session[0].time
    });
    this.initialFormValue = this.editSessionForm.value;
  }

  async updateSession(form: FormGroup) {
    const currentFormValue = form.value;
    const updatedSession = {
      id: this.id,
      title: form.value.title,
      name: form.value.name,
      time: form.value.time
    }
    try {
      const data = await this.sessionsService.updateSession(this.id, updatedSession).subscribe((data) => {
        if (JSON.stringify(currentFormValue) === JSON.stringify(this.initialFormValue)) {
          alert('Nothing changed!');
        }
        else {
          alert('Session updated!');
        }
        this.clearFields(this.editSessionForm);
        this.closeForm();
        this.ngOnInit();
      },
        (err) => (console.log(err)));
    } catch (error) {
      console.log(error);
    }
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