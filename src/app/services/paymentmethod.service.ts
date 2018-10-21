import { Paymentmethod } from './../models/paymentmethod.model';
import { environment } from './../../environments/environment';
import { ServerResponse } from './../models/server-response.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentmethodService {

  constructor(private http: HttpClient) { }

  getPaymentmethods() {
    return this.http.get<ServerResponse>(`${environment.apiUrl}/admin/paymentmethods`)
      .pipe(map(res => {
          return res.data;
      }));
  }


  getPaymentmethod(id: number) {
    return this.http.get<ServerResponse>(`${environment.apiUrl}/admin/paymentmethod/${id}`)
      .pipe(map(res => {
          return res.data;
      }));
  }

  savePaymentmethod(paymentmethod: Paymentmethod) {
    if (paymentmethod.id === 0) {
      return this.http.post<ServerResponse>(`${environment.apiUrl}/admin/paymentmethod`, {paymentmethod})
        .pipe(map(res => {
          console.log('i', res);
          return res;
        }));
    } else {
      return this.http.put<ServerResponse>(`${environment.apiUrl}/admin/paymentmethod`, {paymentmethod})
        .pipe(map(res => {
          console.log('u', res);
          return res;
        }));
    }
  }

  deletePaymentmethod(paymentmethod: Paymentmethod) {
    return this.http.delete<ServerResponse>(`${environment.apiUrl}/admin/paymentmethod/${paymentmethod.id}`)
      .pipe(map(res => {
        return res;
      }));
  }


}
