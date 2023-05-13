import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  constructor(private http : HttpClient) { }

  getSessions() : Observable<any>{
    return this.http.get('/api/sessions');
  }

  getSession(id: any) : Observable<any>{
    return this.http.get('/api/sessions/' + id, { responseType: 'json' });
  }

  addSession(newSession: any) : Observable<any>{
    return this.http.post('/api/sessions', newSession, { responseType: 'text' });
  }
}
