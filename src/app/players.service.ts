import { Injectable } from '@angular/core';
import { Player } from './models/player.model';
import { roster } from './models/ROSTER';

@Injectable()
export class PlayersService {

  constructor() { }

  getPlayers() {
    return roster;
  }

}
