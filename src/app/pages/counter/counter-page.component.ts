import { Component } from "@angular/core";

@Component({
  template: `
    <h1>Hi</h1>
    <h2>CounterComponent Page</h2>
    <h3>Counter: {{ counter }}</h3>
    <span>
      <button (click)="increaseBy()">+1</button>
    </span>
    <span>
      <button (click)="resetCounter()">Reset</button>
    </span>
    <span>
      <button (click)="decreaseBy()">-1</button>
    </span>
  `
})
export class CounterPageComponent {
  counter = 10;

  increaseBy() {
    this.counter += 1;
  }

  decreaseBy() {
    this.counter -= 1;
  }

  resetCounter() {
    this.counter = 10;
  }
}
