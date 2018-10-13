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
    { title: 'Categories', icon: 'list', routerlink: '/categories'},
    { title: 'Dashboard', icon: 'dashboard', routerlink: '/dashboard'},
    { title: 'Payment Methods', icon: 'payment', routerlink: '/paymentmethods'},
    { title: 'Contents', icon: 'description', routerlink: '/contents'},
    { title: 'Banners', icon: 'image', routerlink: '/banners'},
    { title: 'Lists', icon: 'view_list', routerlink: '/lists'},
    { title: 'Outlets', icon: 'map', routerlink: '/outlets'},
    { title: 'divider'},
    { title: 'Users', icon: 'supervised_user_circle', routerlink: '/users'},
    { title: 'Products', icon: 'shopping_cart', routerlink: '/products'},
    { title: 'Manage Orders', icon: 'monetization_on', routerlink: '/orders'},
    { title: 'Settings', icon: 'settings', routerlink: '/settings'},
    { title: 'divider'},
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
