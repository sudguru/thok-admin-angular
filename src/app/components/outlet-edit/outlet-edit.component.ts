import { OutletService } from './../../services/outlet.service';
import { Outlet } from './../../models/outlet.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import Quill from 'quill';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-outlet-edit',
  templateUrl: './outlet-edit.component.html',
  styleUrls: ['./outlet-edit.component.css']
})
export class OutletEditComponent implements OnInit {



  modules = {};
  outlet: Outlet;
  headerData: any = {
    title: 'Outlets',
    backBtn: true,
    edit: true
  };

  constructor(
    private route: ActivatedRoute,
    private outletService: OutletService,
    private snackbar: MatSnackBar,
    private router: Router
    ) {
    this.outlet = JSON.parse(this.route.snapshot.paramMap.get('outlet'));
    this.outlet.description = this.rhtmlspecialchars(this.outlet.description );
    this.outlet.lat = +this.outlet.lat;
    this.outlet.lng = +this.outlet.lng;
    if (this.outlet.id === 0) {
      this.headerData.title = `Add New Outlet`;
    } else {
      this.headerData.title = `Edit: ${this.outlet.outlet}`;
    }
    this.modules = {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],        // toggled buttons
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
          [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent

          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

          [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          [{ 'font': [] }],
          [{ 'align': [] }],

          ['clean'],                                         // remove formatting button

          ['link', 'image', 'video']                         // link and image, video
        ]
    };
  }


  ngOnInit() {
  }

  saveOutlet(outlet: Outlet) {
    outlet.slug = this.slugify(outlet.outlet);
    this.outletService.saveOutlet(outlet).subscribe(res => {
      if (!res.error) {
        this.snackbar.open(`${outlet.outlet} Saved.`, '', { duration: 3000 });
        this.router.navigate(['/outlets']);
      } else {
        console.log(res.error);
        this.snackbar.open(`Record could not be Saved !! `, '', { duration: 3000 });
      }
    });
  }

  deleteOutlet(outlet: Outlet) {
    this.outletService.deleteOutlet(outlet).subscribe(res => {
      if (!res.error) {
        this.snackbar.open(`${res.data} record(s) Deleted.`, '', { duration: 3000 });
        this.router.navigate(['/outlets']);
      } else {
        this.snackbar.open(`Record could not be Deleted !! `, '', { duration: 3000 });
      }
    });
  }

  slugify(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }

  rhtmlspecialchars(str) {
    if (typeof(str) === 'string') {
     str = str.replace(/&gt;/ig, '>');
     str = str.replace(/&lt;/ig, '<');
     str = str.replace(/&#039;/g, '\'');
     str = str.replace(/&quot;/ig, '"');
     str = str.replace(/&amp;/ig, '&'); /* must do &amp; last */
     }
    return str;
    }

    chooseLocation(event) {
      this.outlet.lat = event.coords.lat;
      this.outlet.lng = event.coords.lng;
    }
}
