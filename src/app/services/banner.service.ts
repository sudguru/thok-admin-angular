import { Banner } from './../models/banner.model';
import { Injectable } from '@angular/core';
import { ServerResponse } from './../models/server-response.model';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(
    private http: HttpClient
  ) { }

  getBanners() {
    return this.http.get<ServerResponse>(`${environment.apiUrl}/admin/banners`)
      .pipe(map(res => {
          return res.data;
      }));
  }


  getBanner(id: number) {
    return this.http.get<ServerResponse>(`${environment.apiUrl}/admin/banner/${id}`)
      .pipe(map(res => {
          return res.data;
      }));
  }

  saveBanner(banner: Banner) {
    if (banner.id === 0) {
      return this.http.post<ServerResponse>(`${environment.apiUrl}/admin/banner`, {banner})
        .pipe(map(res => {
          return res;
        }));
    } else {
      return this.http.put<ServerResponse>(`${environment.apiUrl}/admin/banner`, {banner})
        .pipe(map(res => {
          return res;
        }));
    }
  }

  deleteBanner(banner: Banner) {
    return this.http.delete<ServerResponse>(`${environment.apiUrl}/admin/banner/${banner.id}`)
      .pipe(map(res => {
        return res;
      }));
  }

  uploadImage(id: number, dataurl: string | ArrayBuffer, filename: string) {
    return this.http.post<ServerResponse>(`${environment.apiUrl}/admin/uploadphoto`,
    { id: id, myFile: dataurl, filename: filename, secret: 'SudeepsSecret'})
    .pipe(map(res => {
      console.log(res);
      return res;
    }));
  }
}
