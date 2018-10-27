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

  id: number;
  player: Player;
  stats: any[];

  constructor(private playersService: PlayersService, private statsService: StatsService, private location: Location, private route: ActivatedRoute) {
    this.route.params.forEach((urlParameters) => {
      this.id = parseInt(urlParameters['ID']);
    })

    this.playersService.getPlayers()
      .subscribe(response => {
        response.forEach(entry => {
          if (this.id === entry[12]) {
            this.player = new Player (
              entry[12],
              entry[3],
              entry[13],
              entry[0],
              entry[14],
              entry[4],
              entry[5],
              entry[6],
              entry[7]
            );
          }
        })
      });

    this.statsService.getStats(this.id)
      .subscribe(response => {
        const allStats = response.json();
        const seasonTotals = allStats.resultSets[0].rowSet;
        const len = seasonTotals.length;
        this.stats = seasonTotals[len-1];
      });
  }

  ngOnInit() {

  }



}
