import { InfoboxService } from './../../services/infobox.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Infobox } from '../../models/infobox.model';

@Component({
  selector: 'app-infobox-edit',
  templateUrl: './infobox-edit.component.html',
  styleUrls: ['./infobox-edit.component.css']
})

export class InfoboxEditComponent implements OnInit {


  infobox: Infobox;
  headerData: any = {
    title: 'Infoboxes',
    backBtn: true,
    edit: true,
  };

  constructor(
    private route: ActivatedRoute,
    private pmService: InfoboxService,
    private snackbar: MatSnackBar,
    private router: Router
    ) {
    this.infobox = JSON.parse(this.route.snapshot.paramMap.get('infobox'));
    if (this.infobox.id === 0) {
      this.headerData.title = `Add New Infobox`;
      this.headerData.edit = false;
    } else {
      this.headerData.title = `Edit Infobox: ${this.infobox.title}`;
    }
  }

  ngOnInit() {
  }

  saveInfobox(infobox: Infobox) {
    this.pmService.saveInfobox(infobox).subscribe(res => {
      if (!res.error) {
        this.snackbar.open(`${infobox.title} Saved.`, '', { duration: 3000 });
        this.router.navigate(['/infobox']);
      } else {
        this.snackbar.open(`Record could not be Saved !! `, '', { duration: 3000 });
      }
    });
  }

  deleteInfobox(infobox: Infobox) {
    this.pmService.deleteInfobox(infobox).subscribe(res => {
      if (!res.error) {
        this.snackbar.open(`${res.data} record(s) Deleted.`, '', { duration: 3000 });
        this.router.navigate(['/infobox']);
      } else {
        this.snackbar.open(`Record could not be Deleted !! `, '', { duration: 3000 });
      }
    });
  }

  checkAndDelete(event) {
    if (event) {
      this.deleteInfobox(this.infobox);
    }
  }

  applyIcon(event: any) {
    this.infobox.icon = event.target.className;
  }

}
