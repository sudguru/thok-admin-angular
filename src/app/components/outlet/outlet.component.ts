import { Outlet } from './../../models/outlet.model';

import { Router } from '@angular/router';
import { OutletService } from './../../services/outlet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outlet',
  templateUrl: './outlet.component.html',
  styleUrls: ['./outlet.component.css']
})
export class OutletComponent implements OnInit {


  headerData: any = {
    title: 'Outlets',
    backBtn: false,
    edit: false
  };
  newOutlet: Outlet;
  outlets: Outlet[];
  constructor(
    private router: Router,
    private outletService: OutletService
  ) { }

  ngOnInit() {
    this.setNewOutlet();
    this.outletService.getOutlets().subscribe(res => {
      this.outlets = res;
    });
  }

  setNewOutlet() {
    this.newOutlet = {
      id: 0,
      outlet: '',
      description: '',
      contact_person: '',
      address: '',
      phone: '',
      email: '',
      viber: '',
      whatsapp: '',
      skype: '',
      lat: 27.719707472886697,
      lng: 85.30918119466924,
      slug: ''
    };
  }


  addEdit(outlet: Outlet) {
    this.router.navigate(['/outlet/', JSON.stringify(outlet)]);
  }

}
