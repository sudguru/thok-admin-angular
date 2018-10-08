import { PaymentmethodService } from './../../services/paymentmethod.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Paymentmethod } from '../../models/paymentmethod.model';

@Component({
  selector: 'app-paymentmethod-edit',
  templateUrl: './paymentmethod-edit.component.html',
  styleUrls: ['./paymentmethod-edit.component.css']
})
export class PaymentmethodEditComponent implements OnInit {


  paymentmethod: Paymentmethod;
  headerData: any = {
    title: 'Payment Methods',
    backBtn: true,
    edit: true
  };

  constructor(
    private route: ActivatedRoute,
    private pmService: PaymentmethodService,
    private snackbar: MatSnackBar,
    private router: Router
    ) {
    this.paymentmethod = JSON.parse(this.route.snapshot.paramMap.get('paymentmethod'));
    if (this.paymentmethod.id === 0) {
      this.headerData.title = `Add New Payment Method`;
    } else {
      this.headerData.title = `Edit Payment Method: ${this.paymentmethod.payment_method}`;
    }
  }

  ngOnInit() {
  }

  savePaymentmethod(paymentmethod: Paymentmethod) {
    this.pmService.savePaymentmethod(paymentmethod).subscribe(res => {
      console.log('save', res);
      if (!res.error) {
        this.snackbar.open(`${paymentmethod.payment_method} Saved.`, '', { duration: 3000 });
        this.router.navigate(['/paymentmethods']);
      } else {
        this.snackbar.open(`Record could not be Saved !! `, '', { duration: 3000 });
      }
    });
  }

  deletePaymentmethod(paymentmethod: Paymentmethod) {
    this.pmService.deletePaymentmethod(paymentmethod).subscribe(res => {
      if (!res.error) {
        this.snackbar.open(`${res.data} record(s) Deleted.`, '', { duration: 3000 });
        this.router.navigate(['/paymentmethods']);
      } else {
        this.snackbar.open(`Record could not be Deleted !! `, '', { duration: 3000 });
      }
    });
  }
}
