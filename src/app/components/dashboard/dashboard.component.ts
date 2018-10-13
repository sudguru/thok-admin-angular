import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  headerData: any = {
    title: 'Dashboard',
    backBtn: false,
    edit: true
  };
  constructor() { }

  ngOnInit() {
  }

  ddd(event) {
    alert(event);
  }

}
