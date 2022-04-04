import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponentComponent } from '../components/first-component/first-component.component';
import { CounterComponent } from '../components/counter/counter.component';
import { FormsModule } from '@angular/forms';
import { SampleDirective } from '../directives/sample.directive';

@NgModule({
  declarations: [
    FirstComponentComponent,
    SampleDirective,
    CounterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [FirstComponentComponent, CounterComponent]
})
export class ToDoModule { }
