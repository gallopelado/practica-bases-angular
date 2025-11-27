import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

// , changeDetection: ChangeDetectionStrategy.OnPush,
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
  counterSignals = signal(100);

  // para comprobar que el zonejs no funciona en el setinterval
  // constructor() {
  //   setInterval(() => {
  //     this.counter += 1;
  //     this.counterSignals.update(elemento => elemento + 1);
  //   }, 2000);
  // }

  increaseBy() {
    this.counter += 1;
    this.counterSignals.update(valor => valor + 1);
  }

  decreaseBy() {
    this.counter -= 1;
    this.counterSignals.update(valor => valor - 1);
  }

  resetCounter() {
    this.counter = 10;
    this.counterSignals.set(100);
  }
}
