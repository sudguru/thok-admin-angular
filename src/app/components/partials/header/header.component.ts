import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  @Input() headerData: any;
  constructor(
    public _location: Location,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['/login']);
  }

  dashboard() {
    this.router.navigate(['/dashboard']);
  }

  categories() {
    this.router.navigate(['/categories']);
  }

  paymentMethods() {
    this.router.navigate(['/paymentmethods']);
  }

  users() {
    this.router.navigate(['/users']);
  }

  products() {
    this.router.navigate(['/products']);
  }

  orders() {
    this.router.navigate(['/orders']);
  }

  settings() {
    this.router.navigate(['/settings']);
  }

  contents() {
    this.router.navigate(['/contents']);
  }

  banners() {
    this.router.navigate(['/banners']);
  }

  lists() {
    this.router.navigate(['/lists']);
  }

  maps() {
    this.router.navigate(['/outlets']);
  }

}
