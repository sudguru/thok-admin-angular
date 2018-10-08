import { Setting } from './../models/setting.model';
import { environment } from './../../environments/environment';
import { ServerResponse } from './../models/server-response.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private http: HttpClient) { }

  getSettingRec() {
    return this.http.get<ServerResponse>(`${environment.apiUrl}/admin/setting`)
      .pipe(map(res => {
          return res.data;
      }));
  }

  saveSettingRec(setting: Setting) {

    return this.http.put<ServerResponse>(`${environment.apiUrl}/admin/setting`, {setting})
      .pipe(map(res => {
        console.log(res);
        return res;
      }));

  }

}
