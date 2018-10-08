import { BannerService } from './../../services/banner.service';
import { Banner } from './../../models/banner.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  headerData: any = {
    title: 'Banners',
    backBtn: false,
    edit: true
  };
  newBanner: Banner;
  banneres: Banner[];
  constructor(
    private bannerService: BannerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.setNewBanner();
    this.bannerService.getBanners().subscribe(res => {
      this.banneres = this.list_to_tree(res);
    });
  }

  setNewBanner() {
    this.newBanner = {
      id: 0,
      banner: '',
      title: '',
      display_order: 0,
      position: ''
    };
  }

  addEdit(banner: Banner) {
    this.router.navigate(['/banner/', JSON.stringify(banner)]);
  }

  list_to_tree(list) {
    const map = {}, roots = [];
    let node, i;
    for (i = 0; i < list.length; i += 1) {
        map[list[i].id] = i; // initialize the map
        list[i].children = []; // initialize the children
    }
    for (i = 0; i < list.length; i += 1) {
        node = list[i];
        if (node.parent_id !== '0') {
            // if you have dangling branches check that map[node.parentId] exists
            list[map[node.parent_id]].children.push(node);
        } else {
            roots.push(node);
        }
    }
    console.log(roots);
    return roots;
  }

}
