import { Paymentmethod } from './../../models/paymentmethod.model';
import { Router } from '@angular/router';
import { PaymentmethodService } from './../../services/paymentmethod.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-paymentmethod',
  templateUrl: './paymentmethod.component.html',
  styleUrls: ['./paymentmethod.component.css']
})
export class PaymentmethodComponent implements OnInit {
  headerData: any = {
    title: 'Payment Methods',
    backBtn: false,
    edit: true
  };
  newPaymentmethod: Paymentmethod;
  paymentmethods: Paymentmethod[];
  constructor(
    private router: Router,
    private pmService: PaymentmethodService
  ) { }

  ngOnInit() {
    this.setNewCategory();
    this.pmService.getPaymentmethods().subscribe(res => {
      this.paymentmethods = res;
    });
  }

  setNewCategory() {
    this.newPaymentmethod = {
      id: 0,
      payment_method: ''
    };
  }

  addEdit(paymentmethod: Paymentmethod) {
    this.router.navigate(['/paymentmethod/', JSON.stringify(paymentmethod)]);
  }

}
