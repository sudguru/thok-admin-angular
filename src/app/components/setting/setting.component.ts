import { SettingService } from './../../services/setting.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Setting } from '../../models/setting.model';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  setting: Setting;
  headerData: any = {
    title: 'Settings',
    backBtn: false,
    edit: false
  };

  constructor(
    private settingService: SettingService,
    private snackbar: MatSnackBar,
    ) {
    }


  ngOnInit() {
    this.settingService.getSettingRec().subscribe(res => {
      this.setting = res;
    });
  }

  saveSetting(setting: Setting) {
    this.settingService.saveSettingRec(setting).subscribe(res => {
      if (!res.error) {
        this.snackbar.open(`Settings Saved.`, '', { duration: 3000 });
      } else {
        this.snackbar.open(`Settings could not be Saved !! `, '', { duration: 3000 });
      }
    });
  }

}
