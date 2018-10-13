import { DataService } from './../../../services/data.service';
import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import { AlertComponent } from '../../alert/alert.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  @Input() headerData: any;
  @Output() deleteClick: EventEmitter<boolean>;
  sidenavState: boolean;
  constructor(
    public _location: Location,
    private router: Router,
    private dataService: DataService,
    public dialog: MatDialog,
  ) {
    this.deleteClick = new EventEmitter<boolean>();
  }

  sidenavtoggle() {
    this.sidenavState = !this.sidenavState;
    this.dataService.changeData(this.sidenavState);
  }

  ngOnInit() {
    this.dataService.currentSideNavState.subscribe(currentState => this.sidenavState = currentState);
  }

  deleteClicked() {


    const dialogRef = this.dialog.open(AlertComponent, {
      width: '250px',
      disableClose: true,
      autoFocus: true,
      data: {}
    });
    const that = this;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteClick.emit(true);
      } else {
        this.deleteClick.emit(false);
      }
    });
  }

}
