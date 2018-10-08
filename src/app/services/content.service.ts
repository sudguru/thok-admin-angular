import { Content } from './../models/content.model';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { ServerResponse } from './../models/server-response.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentService {


  constructor(private http: HttpClient) { }

  getContents() {
    return this.http.get<ServerResponse>(`${environment.apiUrl}/admin/contents`)
      .pipe(map(res => {
          console.log(res);
          return res.data;
      }));
  }


  getContent(id: number) {
    return this.http.get<ServerResponse>(`${environment.apiUrl}/admin/content/${id}`)
      .pipe(map(res => {
          return res.data;
      }));
  }

  saveContent(content: Content) {
    if (content.id === 0) {
      return this.http.post<ServerResponse>(`${environment.apiUrl}/admin/content`, {content})
        .pipe(map(res => {
          return res;
        }));
    } else {
      return this.http.put<ServerResponse>(`${environment.apiUrl}/admin/content`, {content})
        .pipe(map(res => {
          return res;
        }));
    }
  }

  deleteContent(content: Content) {
    return this.http.delete<ServerResponse>(`${environment.apiUrl}/admin/content/${content.id}`)
      .pipe(map(res => {
        return res;
      }));
  }


}
