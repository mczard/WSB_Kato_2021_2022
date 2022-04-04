import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'wsb-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  private _counter = 0;

  @Input()
  set counter(newValue: number) {
    this._counter = newValue;
    this.check();
  }

  get counter(): number {
    return this._counter;
  }

  @Input()
  step = 1;

  @Output()
  multiplyFive = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.counter += this.step;
  }

  setValue(newValue: number) {
    this.counter = newValue;
  }

  check() {
    if (this._counter % 5 === 0) {
      this.multiplyFive.emit(`Aktualna wartość ${this._counter}`);
    }
  }
}
