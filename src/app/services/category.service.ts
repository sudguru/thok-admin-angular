import { ServerResponse } from './../models/server-response.model';
import { Category } from './../models/category.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  getCategories() {
    return this.http.get<ServerResponse>(`${environment.apiUrl}/admin/categories`)
      .pipe(map(res => {
          return res.data;
      }));
  }

  getCategory(id: number) {
    return this.http.get<ServerResponse>(`${environment.apiUrl}/admin/category/${id}`)
      .pipe(map(res => {
          return res.data;
      }));
  }

  saveCategory(category: Category) {
    return this.http.post<ServerResponse>(`${environment.apiUrl}/admin/category`, {category})
    .pipe(map(res => {
      return res;
    }));
  }
}
