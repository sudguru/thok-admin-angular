import { Infobox } from './../../models/infobox.model';

import { Router } from '@angular/router';
import { InfoboxService } from './../../services/infobox.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-infobox',
  templateUrl: './infobox.component.html',
  styleUrls: ['./infobox.component.css']
})
export class InfoboxComponent implements OnInit {

  headerData: any = {
    title: 'Infoboxes',
    backBtn: false,
    edit: false
  };
  newInfobox: Infobox;
  infoboxes: Infobox[];
  constructor(
    private router: Router,
    private pmService: InfoboxService
  ) { }

  ngOnInit() {
    this.setNewCategory();
    this.pmService.getInfoboxs().subscribe(res => {
      this.infoboxes = res;
    });
  }

  setNewCategory() {
    this.newInfobox = {
      id: 0,
      title: '',
      subtitle: '',
      display_order: 0,
      icon: 'info',
      link: ''
    };
  }

  addEdit(infobox: Infobox) {
    this.router.navigate(['/infobox/', JSON.stringify(infobox)]);
  }

}
