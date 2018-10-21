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

  updateBanner(banner: Banner) {
    return this.http.put<ServerResponse>(`${environment.apiUrl}/admin/banner`, {banner})
      .pipe(map(res => {
        return res;
      }));
  }

  deleteBanner(banner: Banner) {
    return this.http.delete<ServerResponse>(`${environment.apiUrl}/admin/banner/${banner.id}`)
      .pipe(map(res => {
        return res;
      }));
  }

  uploadImageAndAddRecord(dataurl: string | ArrayBuffer, filename: string, position: string, title: string,
    subtitle: string, link: string, textat: string) {
    return this.http.post<ServerResponse>(`${environment.apiUrl}/admin/banner/uploadbanner`,
    {myFile: dataurl, filename: filename, secret: 'SudeepsSecret', position: position, title: title,
    subtitle: subtitle, link: link, textat: textat})
    .pipe(map(res => {
      return res;
    }));
  }

  reorderBanners(banners: Banner[]) {
    return this.http.post<ServerResponse>(`${environment.apiUrl}/admin/banner/reorder`, { banners})
      .pipe(map(res => {
        console.log(res);
        return res;
      }));
  }

}
