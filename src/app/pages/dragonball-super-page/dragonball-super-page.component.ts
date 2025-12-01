import { Component, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import type { Character } from '../../interfaces/character.interface';
import { DragonballCharacterAdd } from "../../components/dragonball/dragonball-character-add/dragonball-character-add.component";

@Component({
  selector: 'app-dragonball-super-page',
  imports: [CharacterListComponent, DragonballCharacterAdd],
  templateUrl: './dragonball-super-page.component.html'
})
export class DragonballSuperPageComponent {
  name = signal<string>("");
  power = signal<number>(0)
  characters = signal<Character[]>([
    { id: 1, name: "Goku", power: 9001, urlImage: 'https://dragonball-api.com/characters/goku_normal.webp' }
  ]);

  addCharacter(receivedCharacter: Character): void {
    this.characters.update(
      list => [...list, receivedCharacter]
    );
  }
}
