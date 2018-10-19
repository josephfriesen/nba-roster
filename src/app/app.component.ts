import { Component } from '@angular/core';
import { Player } from './models/player.model';
import { giannis, roster } from './models/ROSTER';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  giannis: Player = giannis; // single player pulled from ROSTER for test purposes
  roster: Player[] = roster;

  log(arg): void {
    console.log(arg);
  }

}
