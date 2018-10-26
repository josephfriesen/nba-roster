import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player.model';
import { PlayersService } from '../players.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';
import StatsQuery from './statsQuery';

@Component({
  selector: 'player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css'],
  providers: [PlayersService]
})
export class PlayerStatsComponent implements OnInit {

  index: number
  player: Player;
  stats;

  constructor(private playersService: PlayersService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.index = parseInt(urlParameters['ID']);
    })
    this.playersService.playerLookup(this.index).subscribe(data => {
        this.player = new Player(
          this.index,
          data[this.index][12],
          data[this.index][3],
          data[this.index][13],
          data[this.index][0],
          data[this.index][14],
          data[this.index][4],
          data[this.index][5],
          data[this.index][6],
          data[this.index][7]
        );
      });
  }



}
