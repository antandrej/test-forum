import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  constructor(private http : HttpClient) { }

/* ~~~~~~~~ DATA SERVICE
  private boolSource = new BehaviorSubject(true);
  first = this.boolSource;

  public backToFirst(first: boolean){
    this.first.next(first);
  }
*/
  getSessions() : Observable<any>{
    return this.http.get('/api/sessions');
  }

  getSession(id: any) : Observable<any>{
    return this.http.get('/api/sessions/' + id, { responseType: 'json' });
  }

  addSession(newSession: any) : Observable<any>{
    return this.http.post('/api/sessions', newSession, { responseType: 'text' });
  }

  updateSession(id:any, updatedSession: any) : Observable<any>{
    return this.http.put('/api/sessions/' + id, updatedSession, { responseType: 'text' });
  }

  uploadFile(id: any,formData:FormData) : Observable<any>{
    return this.http.post('api/uploads/' + id, formData);
  }

  getFiles(id: any) : Observable<any>{
    return this.http.get('api/uploads/' + id, { responseType: 'json' });
  }

  downloadFile(id: any, fileName:any) : Observable<any>{
    return this.http.get(`/api/uploads/${id}/${fileName}`);
  }

}
