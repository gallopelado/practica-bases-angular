import { Component } from "@angular/core";

@Component({
  templateUrl: './counter-page.component.html',
  styles: `
    button {
      padding: 5px;
      margin: 5px;
      width: 10%;
    }
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
