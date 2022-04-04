import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'wsb-not-found-window',
  templateUrl: './not-found-window.component.html',
  styleUrls: ['./not-found-window.component.scss']
})
export class NotFoundWindowComponent implements OnInit {

  seconds: number = 10;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.countDown();
  }

  countDown() {

    if (this.seconds <= 0) {
      this.router.navigate(['main']);
      return;
    }

    setTimeout(() => {
      this.seconds -= 1;
      this.countDown();
    }, 1000);
  }

}
