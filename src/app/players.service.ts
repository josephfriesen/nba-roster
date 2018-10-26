import { Injectable } from '@angular/core';
import { Player } from './models/player.model';
import { roster } from './models/ROSTER';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PlayersService {

  constructor(private database: AngularFireDatabase) {
    this.players = database.list('players');
  }

  players: FirebaseListObservable<any[]>;

  getPlayers() {
    return this.players;
  }

  playerLookup(id: number) {
    return this.database.object('players/' + 'id');
  }

}
