import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player.model';
import { PlayersService } from '../players.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css'],
  providers: [PlayersService]
})
export class PlayerStatsComponent implements OnInit {

  ID: number;
  player: Player;

  constructor(private playersService: PlayersService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.ID = parseInt(urlParameters['ID']);
    })
    this.playersService.playerLookup(this.ID).subscribe(data => {
      console.log(data);
        // this.player = new Player(
        //   data[12],
        //   data[3],
        //   data[13],
        //   data[0],
        //   data[14],
        //   data[4],
        //   data[5],
        //   data[6],
        //   data[7]
        // );
      });
  }



}
