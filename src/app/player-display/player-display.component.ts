import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../models/player.model';

@Component({
  selector: 'player-display',
  templateUrl: './player-display.component.html',
  styleUrls: ['./player-display.component.css']
})
export class PlayerDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() myPlayer: Player;

}
