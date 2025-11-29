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
  name = signal<string>("");
  power = signal<number>(0)
  characters = signal<Character[]>([
    { id: 1, name: "Goku", power: 9001, urlImage: 'https://dragonball-api.com/characters/goku_normal.webp' },
    { id: 2, name: "Vegeta", power: 8500, urlImage: 'https://dragonball-api.com/characters/vegeta_normal.webp' },
    { id: 3, name: "Piccolo", power: 7500, urlImage: 'https://dragonball-api.com/characters/picolo_normal.webp' }
  ]);

  addCharacter(): void {

    if(this.name().trim().length == 0 || this.power() < 0) {
      alert('Complete los campos!!!');
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
      urlImage: 'https://www.svgrepo.com/show/493150/person-holding-a-glass-of-milk.svg'
    }

    console.log('Nuevo persona a agregar ' + newCharacter);

    this.characters.update( currentCharacteres => [
      ...currentCharacteres,
      newCharacter
    ]);

    console.log('Colección actualizada: ', this.characters());

    // limpiar formulario
    this.name.set('');
    this.power.set(0);
  }

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
