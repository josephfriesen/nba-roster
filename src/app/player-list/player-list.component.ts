import { Component, OnInit, Input, Output } from '@angular/core';
import { Player } from '../models/player.model';
import { roster } from '../models/ROSTER';

@Component({
  selector: 'player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  roster: Player[] = roster;

  constructor() { }

  ngOnInit() {
  }

  @Input() filterByName: string;

}
