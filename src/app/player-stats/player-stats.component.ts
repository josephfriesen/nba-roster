import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player.model';
import { PlayersService } from '../players.service';
import { StatsService } from '../stats.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css'],
  providers: [PlayersService, StatsService]
})
export class PlayerStatsComponent implements OnInit {

  index: number;
  player: Player;
  stats = undefined;

  constructor(private playersService: PlayersService, private statsService: StatsService, private location: Location, private route: ActivatedRoute) {
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
    this.statsService.getStats(this.player.ID)
      .subscribe(response => {
        const allStats = response.json();
        const seasonTotals = allStats.resultSets[0].rowSet;
        const len = seasonTotals.length;
        this.stats = seasonTotals[len-1];
        console.log(this.stats);
      });
  }

  ngOnInit() {

  }



}
