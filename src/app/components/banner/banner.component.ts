import { BannerService } from './../../services/banner.service';
import { Banner } from './../../models/banner.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  homeMains = [];
  homeSubMains = [];
  optionsHome: {};
  optionsHomeSub: {};
  headerData: any = {
    title: 'Banners',
    backBtn: false,
    edit: true
  };
  newBanner: Banner;
  banners: Banner[];
  constructor(
    private bannerService: BannerService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {
    this.optionsHome = {
      onUpdate: (event: any) => {
        this.reorderBanners(this.homeMains);
      }
    };

    this.optionsHomeSub = {
      onUpdate: (event: any) => {
        this.reorderBanners(this.homeSubMains);
      }
    };
  }

  ngOnInit() {
    this.setNewBanner();
    this.bannerService.getBanners().subscribe(res => {
      this.banners = res;
      this.homeMains = this.banners.filter(r => r.position === 'Home Main');
      this.homeSubMains = this.banners.filter(r => r.position === 'Home Sub Main');
    });
  }

  setNewBanner() {
    this.newBanner = {
      id: 0,
      banner: '',
      title: '',
      display_order: 0,
      position: 'Home Main'
    };
  }

  addEdit(banner: Banner) {
    this.router.navigate(['/banner/', JSON.stringify(banner)]);
  }

  reorderBanners(banners: Banner[]) {
    this.bannerService.reorderBanners(banners).subscribe(res => {
      if (!res.error) {
        this.snackbar.open('Banners Reordered!', '', { duration: 2000 });
      } else {
        this.snackbar.open('Reordered Failed', '', { duration: 2000 });
      }
    });
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
