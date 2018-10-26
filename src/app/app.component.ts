import { Component, OnInit } from '@angular/core';
import { Player } from './models/player.model';
import { PlayersService } from './players.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlayersService]
})
export class AppComponent {
  roster: Player[] = [];

  constructor(private playersService: PlayersService) {
    this.playersService.getPlayers()
      .subscribe(array => {
        array.forEach((data,idx) => {
          const player = new Player(
            idx,
            data[12],
            data[3],
            data[13],
            data[0],
            data[14],
            data[4],
            data[5],
            data[6],
            data[7]
          );
          this.roster.push(player);
        });
      });
  }

  ngOnInit() {

  }

}
