import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './dragonball-character-add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonballCharacterAdd {
  name = signal<string>("");
  power = signal<number>(0);

  newCharacter = output<Character>();

  addCharacter(): void {

    if(this.name().trim().length == 0 || this.power() < 0) {
      alert('Complete los campos!!!');
      return;
    }

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
      urlImage: 'https://www.svgrepo.com/show/493150/person-holding-a-glass-of-milk.svg'
    }

    // this.characters.update( currentCharacteres => [
    //   ...currentCharacteres,
    //   newCharacter
    // ]);
    this.newCharacter.emit(newCharacter);

    // limpiar formulario
    this.name.set('');
    this.power.set(0);
  }

}
