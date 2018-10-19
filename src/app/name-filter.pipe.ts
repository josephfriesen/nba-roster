import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './models/player.model';

@Pipe({
  name: 'nameFilter',
  pure: false
})

export class NameFilterPipe implements PipeTransform {

  transform(input: Player[], search: string): any {
    let output: Player[] = [];
    input.forEach(player => {
      const name = player.name.toLowerCase();
      if (name.includes(search)) {
        output.push(player);
      }
    })
    return output;
  }

}
