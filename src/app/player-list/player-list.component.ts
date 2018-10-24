import { Component, OnInit, Input, Output } from '@angular/core';
import { Player } from '../models/player.model';
import { PlayersService } from '../players.service';

@Component({
  selector: 'player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  providers: [PlayersService]
})
export class PlayerListComponent implements OnInit {

  constructor(private playersService: PlayersService) { }

  ngOnInit() {
  }

  roster: Player[] = this.playersService.getPlayers();
  @Input() filterByName: string;

}
