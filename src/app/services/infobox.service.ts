import { Infobox } from './../models/infobox.model';
import { environment } from './../../environments/environment';
import { ServerResponse } from './../models/server-response.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InfoboxService {

  constructor(private http: HttpClient) { }

  getInfoboxs() {
    return this.http.get<ServerResponse>(`${environment.apiUrl}/admin/infoboxes`)
      .pipe(map(res => {
          return res.data;
      }));
  }


  getInfobox(id: number) {
    return this.http.get<ServerResponse>(`${environment.apiUrl}/admin/infobox/${id}`)
      .pipe(map(res => {
          return res.data;
      }));
  }

  saveInfobox(infobox: Infobox) {
    if (infobox.id === 0) {
      return this.http.post<ServerResponse>(`${environment.apiUrl}/admin/infobox`, {infobox})
        .pipe(map(res => {
          console.log('i', res);
          return res;
        }));
    } else {
      return this.http.put<ServerResponse>(`${environment.apiUrl}/admin/infobox`, {infobox})
        .pipe(map(res => {
          console.log('u', res);
          return res;
        }));
    }
  }

  deleteInfobox(infobox: Infobox) {
    return this.http.delete<ServerResponse>(`${environment.apiUrl}/admin/infobox/${infobox.id}`)
      .pipe(map(res => {
        return res;
      }));
  }


}
