import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DragonballService {
  name = signal<string>("");
  power = signal<number>(0)
  characters = signal<Character[]>([
    { id: 1, name: "Goku", power: 9001, urlImage: 'https://dragonball-api.com/characters/goku_normal.webp' }
  ]);

  saveToLocalStorage = effect(() => {
    console.log(`Contados de elementos characters ${this.characters().length}`);
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(receivedCharacter: Character): void {
    this.characters.update(
      list => [...list, receivedCharacter]
    );
  }
}
