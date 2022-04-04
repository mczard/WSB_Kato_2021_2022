import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'wsb-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.scss']
})
export class MainWindowComponent {

  title = 'AngularLurs';

  @ViewChild(CounterComponent)
  counter1: CounterComponent | undefined;

  @ViewChild('counter2')
  counter2: CounterComponent | undefined;

  @ViewChildren(CounterComponent)
  counters: QueryList<CounterComponent> | undefined;  // To jest źle ----> CounterComponent[] | undefined

  @ViewChild('imie')
  imieInput: ElementRef<HTMLInputElement> | undefined;

  @ViewChild('counter3')
  counter3: CounterComponent | undefined;

  nowaWartosc: any = 0;

  constructor(
    public userService: UserService,
    private router: Router
    ) {}

  ustawWartosc() {
    if (this.counter3) {
      this.counter3.setValue(this.nowaWartosc);
    }
  }

  przywitajSie() {
    if (this.imieInput) {
      const imie = this.imieInput?.nativeElement.value;

      alert(imie);
    }
  }

  resetAll() {
    if (this.counters) {
      this.counters.forEach((counterComponent: CounterComponent) => {
        counterComponent.counter = 0;
      });
    }
  }

  resetCounter1() {
    if (this.counter1){
      this.counter1.counter = 0;
    }
  }

  resetCounter2() {
    if (this.counter2){
      this.counter2.counter = 0;
    }
  }

  handleMultiplyFive(message: string) {
    alert(message);
  }

  logOut() {
    this.userService.logOut();
    this.router.navigate(["/"]);
  }

}
