import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',
  styles: `
    .css-1f12kxr {
      width: 100%;
      height: 100%;
      min-height: 200px;
      max-height: 200px;
      margin: 0px;
      object-position: center center;
      object-fit: contain;
      z-index: 0;
      transition: transform 0.6s;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterListComponent {
  characters = input.required<Character[]>();
  listadoPersonaje = input.required<string>();

  showColorByLevel(power: number): string {
    if (power > 9000) {
      return "success";
    } else if (power > 8000) {
      return "warning";
    } else {
      return "secondary";
    }
  }
}
