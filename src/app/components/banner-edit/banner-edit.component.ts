import { BannerService } from './../../services/banner.service';
import { Banner } from './../../models/banner.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-banner-edit',
  templateUrl: './banner-edit.component.html',
  styleUrls: ['./banner-edit.component.css']
})
export class BannerEditComponent implements OnInit {


  banner: Banner;
  imageDataURL: string | ArrayBuffer;
  rootCategories: Banner[];
  headerData: any = {
    title: 'Banner',
    backBtn: true,
    edit: true
  };
  imagePath = `${environment.apiUrl}/uploads/banner/`;
  bannerPositions = environment.bannerPositions;
  constructor(
    private route: ActivatedRoute,
    private bannerService: BannerService,
    private snackbar: MatSnackBar,
    private router: Router
    ) {
    this.banner = JSON.parse(this.route.snapshot.paramMap.get('banner'));
    console.log('id is ', this.banner.banner);
    if (this.banner.id === 0) {
      this.headerData.title = `Add New Banner`;
      this.headerData.edit = false;
    } else {
      this.headerData.title = `Edit Banner:`;
    }
  }

  ngOnInit() {

  }

  updateBanner(banner: Banner) {
    this.bannerService.updateBanner(banner).subscribe(res => {
      if (!res.error) {
        this.snackbar.open(`${banner.banner} Saved.`, '', { duration: 3000 });
        this.router.navigate(['/banners']);
      } else {
        this.snackbar.open(`Record could not be Saved !! `, '', { duration: 3000 });
      }
    });
  }

  deleteBanner(banner: Banner) {
    this.bannerService.deleteBanner(banner).subscribe(res => {
      if (!res.error) {
        this.snackbar.open(`${res.data} record(s) Deleted.`, '', { duration: 3000 });
        this.router.navigate(['/banners']);
      } else {
        this.snackbar.open(`Record could not be Deleted !! `, '', { duration: 3000 });
      }
    });
  }

  chooseFile() {
    document.getElementById('myFile').click();
  }

  prepareFile(event) {
    const file = event.target.files[0];
    const filename = file.name;
    const position = this.banner.position;
    const title = this.banner.title;
    const link = this.banner.link;
    const reader = new FileReader();
    const that = this;
    reader.onloadend = function () {
      that.imageDataURL = reader.result;
      that.bannerService.uploadImageAndAddRecord(that.imageDataURL, filename, position, title, link).subscribe(res => {
        if (!res.error) {
          that.banner.banner = res.data;
          that.snackbar.open(`${res.data} uploaded Successfully.`, '', { duration: 3000 });
          that.router.navigate(['/banners']);
        } else {
          that.snackbar.open(`${res.error}`, '', { duration: 3000 });
        }
      });
    };
    reader.readAsDataURL(file);

  }

  checkAndDelete(event) {
    if (event) {
      this.deleteBanner(this.banner);
    }
  }
}
