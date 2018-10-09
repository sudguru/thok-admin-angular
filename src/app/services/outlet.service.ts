import { Outlet } from './../models/outlet.model';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { ServerResponse } from './../models/server-response.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OutletService {


  constructor(private http: HttpClient) { }

  getOutlets() {
    return this.http.get<ServerResponse>(`${environment.apiUrl}/admin/outlets`)
      .pipe(map(res => {
          return res.data;
      }));
  }


  getOutlet(id: number) {
    return this.http.get<ServerResponse>(`${environment.apiUrl}/admin/outlet/${id}`)
      .pipe(map(res => {
          return res.data;
      }));
  }

  saveOutlet(outlet: Outlet) {
    if (outlet.id === 0) {
      return this.http.post<ServerResponse>(`${environment.apiUrl}/admin/outlet`, {outlet})
        .pipe(map(res => {
          return res;
        }));
    } else {
      return this.http.put<ServerResponse>(`${environment.apiUrl}/admin/outlet`, {outlet})
        .pipe(map(res => {
          return res;
        }));
    }
  }

  deleteOutlet(outlet: Outlet) {
    return this.http.delete<ServerResponse>(`${environment.apiUrl}/admin/outlet/${outlet.id}`)
      .pipe(map(res => {
        return res;
      }));
  }


}
