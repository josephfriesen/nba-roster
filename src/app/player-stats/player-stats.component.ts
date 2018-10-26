import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player.model';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css'],
  providers: [PlayersService]
})
export class PlayerStatsComponent implements OnInit {

  constructor(private playersService: PlayersService) { }

  ngOnInit() {

  }



}
