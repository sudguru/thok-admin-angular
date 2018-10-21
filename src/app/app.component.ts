import { DataService } from './services/data.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-angular';
  sidenavState: boolean;
  links = [
    { title: 'Dashboard', icon: 'dashboard', routerlink: '/dashboard'},
    { title: 'Top Messages', icon: 'speaker_notes', routerlink: '/message'},
    { title: 'Info Boxes', icon: 'info', routerlink: '/infobox'},
    { title: 'Contents', icon: 'description', routerlink: '/content'},
    { title: 'Banners', icon: 'image', routerlink: '/banner'},
    { title: 'Lists', icon: 'view_list', routerlink: '/list'},
    { title: 'Outlets', icon: 'map', routerlink: '/outlet'},
    { title: 'divider'},
    { title: 'Users', icon: 'supervised_user_circle', routerlink: '/user'},
    { title: 'divider'},
    { title: 'Categories', icon: 'list', routerlink: '/category'},
    { title: 'Payment Methods', icon: 'payment', routerlink: '/paymentmethod'},
    { title: 'Products', icon: 'shopping_cart', routerlink: '/product'},
    { title: 'Manage Orders', icon: 'monetization_on', routerlink: '/order'},
    { title: 'divider'},
    { title: 'Settings', icon: 'settings', routerlink: '/setting'},
    { title: 'Log Out', icon: 'exit_to_app', routerlink: '/login', click: 'hidesidenav'},
  ];

  constructor(
    private dataService: DataService
  ) {
    this.dataService.currentSideNavState.subscribe(currentState => this.sidenavState = currentState);
  }

  hidesidenav() {
    // this.dataService.changeData(false);
  }
}
