import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'wsb-login-window',
  templateUrl: './login-window.component.html',
  styleUrls: ['./login-window.component.scss']
})
export class LoginWindowComponent implements OnInit {

  errorMessage = '';
  userName = '';
  password = '';

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
    console.log('ngInit');
  }

  logIn() {
    this.errorMessage = '';

    const loginResult = this.userService.logIn(this.userName, this.password);

    if (loginResult !== true) {
      this.errorMessage = loginResult as any;
    } else {
      this.router.navigate(["/main"]);
    }
  }

}
