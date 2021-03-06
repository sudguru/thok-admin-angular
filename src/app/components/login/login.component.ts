import { DataService } from './../../services/data.service';
import { ServerResponse } from './../../models/server-response.model';
import { AuthenticationService } from './../../services/auth.service';
import { Login } from './../../models/login.model';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  returnUrl: string;
  loginUser: Login = {
    username: '',
    password: ''
  };


  constructor(
    private snackbar: MatSnackBar,
    private authService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
    ) { }

  ngOnInit() {
    // reset login status
    this.authService.logout();

    // get return url from route parameters or default to '/'

    let tempUrl;
    if (this.route.snapshot.queryParams['returnUrl']) {
      console.log(this.route.snapshot.queryParams['returnUrl']);
      tempUrl = '/' + this.route.snapshot.queryParams['returnUrl'].split('/')[1];
    }
    console.log(tempUrl);
    this.returnUrl = tempUrl || '/';
    this.dataService.changeData(false);
  }

  login (loginUser: Login) {

    this.authService.login(loginUser.username, loginUser.password).subscribe((result: ServerResponse) => {
      if (!result.error) {
        this.snackbar.open(`Welcome ${loginUser.username}.`, '', { duration: 3000 });
        this.router.navigate([this.returnUrl]);
      } else {
        this.snackbar.open(`Invalid Login. Try Again.`, '', { duration: 3000 });
      }
    });
  }

  help() {
    this.router.navigate(['/help']);
  }

}
