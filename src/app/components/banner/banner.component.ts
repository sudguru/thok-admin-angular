import { BannerService } from './../../services/banner.service';
import { Banner } from './../../models/banner.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { environment } from './../../../environments/environment';


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
    edit: false
  };
  newBanner: Banner;
  banners: Banner[];
  bannerPositions = environment.bannerPositions;
  imagePath = `${environment.apiUrl}/uploads/banners/`;
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
      subtitle: '',
      display_order: 0,
      position: 'Home Main',
      link: '',
      textat: 'left'
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


}
