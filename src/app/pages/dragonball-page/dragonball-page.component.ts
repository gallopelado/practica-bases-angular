import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
  urlImage?: string;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css'
})
export class DragonballPageComponent {
  characters = signal<Character[]>([
    { id: 1, name: "Goku", power: 9001, urlImage: 'https://dragonball-api.com/characters/goku_normal.webp' },
    { id: 2, name: "Vegeta", power: 8500, urlImage: 'https://dragonball-api.com/characters/vegeta_normal.webp' },
    { id: 3, name: "Piccolo", power: 7500, urlImage: 'https://dragonball-api.com/characters/picolo_normal.webp' }
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
