import { Component, OnInit, Input, Output } from '@angular/core';

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

}
