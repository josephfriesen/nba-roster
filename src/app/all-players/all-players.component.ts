import { Component, OnInit, Input, Output } from '@angular/core';
import { Player } from '../models/player.model';
import { PlayersService } from '../players.service';

@Component({
  selector: 'all-players',
  templateUrl: './all-players.component.html',
  styleUrls: ['./all-players.component.css'],
  providers: [PlayersService]
})

export class AllPlayersComponent implements OnInit {

  roster: Player[] = [];

  constructor(private playersService: PlayersService) {
    this.playersService.getPlayers()
      .subscribe(array => {
        array.forEach((data,idx) => {
          const player = new Player(
            idx,
            data[12],
            data[3],
            data[13],
            data[0],
            data[14],
            data[4],
            data[5],
            data[6],
            data[7]
          );
          this.roster.push(player);
        });
      });
  }

  ngOnInit() {
  }

}
