import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.component.html'
})
export class DragonballPageComponent {
  characters = signal<Character[]>([
    { id: 1, name: "Goku", power: 9001 },
    { id: 2, name: "Vegeta", power: 8500 },
    { id: 3, name: "Piccolo", power: 7500 }
  ]);

  showColorLevel(power: number): string {
    if (power > 9000) {
      return "success";
    } else if (power > 8000) {
      return "warning";
    } else {
      return "secondary";
    }
  }

}
