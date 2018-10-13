import { DataService } from './../../../services/data.service';
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

  sidenavState: boolean;
  constructor(
    public _location: Location,
    private router: Router,
    private dataService: DataService
  ) {}

  sidenavtoggle() {
    this.sidenavState = !this.sidenavState;
    this.dataService.changeData(this.sidenavState);
  }

  ngOnInit() {
    this.dataService.currentSideNavState.subscribe(currentState => this.sidenavState = currentState);
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
