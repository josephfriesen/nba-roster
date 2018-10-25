import { Component, OnInit, Input, Output } from '@angular/core';
import { Player } from '../models/player.model';

@Component({
  selector: 'search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  searchValue: string;

  @Input() roster: Player[];

}
