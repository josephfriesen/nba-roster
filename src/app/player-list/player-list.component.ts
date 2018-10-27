import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../models/player.model';
import { PlayersService } from '../players.service';

@Component({
  selector: 'player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  providers: [PlayersService]
})
export class PlayerListComponent implements OnInit {

  log(arg) {console.log(arg);}

  constructor(private router: Router, private playersService: PlayersService) { }

  @Input() roster: Player[];
  @Input() filterByName: string;

  ngOnInit() {

  }

  goToPlayer(selectedPlayer: Player) {
    this.router.navigate(['player', selectedPlayer.ID]);
  }

}
