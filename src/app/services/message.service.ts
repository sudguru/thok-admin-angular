import { Message } from './../models/message.model';
import { environment } from './../../environments/environment';
import { ServerResponse } from './../models/server-response.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  getMessages() {
    return this.http.get<ServerResponse>(`${environment.apiUrl}/admin/messages`)
      .pipe(map(res => {
          return res.data;
      }));
  }


  getMessage(id: number) {
    return this.http.get<ServerResponse>(`${environment.apiUrl}/admin/message/${id}`)
      .pipe(map(res => {
          return res.data;
      }));
  }

  saveMessage(message: Message) {
    if (message.id === 0) {
      return this.http.post<ServerResponse>(`${environment.apiUrl}/admin/message`, {message})
        .pipe(map(res => {
          console.log('i', res);
          return res;
        }));
    } else {
      return this.http.put<ServerResponse>(`${environment.apiUrl}/admin/message`, {message})
        .pipe(map(res => {
          console.log('u', res);
          return res;
        }));
    }
  }

  deleteMessage(message: Message) {
    return this.http.delete<ServerResponse>(`${environment.apiUrl}/admin/message/${message.id}`)
      .pipe(map(res => {
        return res;
      }));
  }


}
