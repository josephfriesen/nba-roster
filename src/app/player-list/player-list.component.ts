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

  log(arg) {console.log(arg);}

  constructor(private playersService: PlayersService) { }

  @Input() roster: Player[];

  ngOnInit() {

    // this.playersService.getPlayers()
    //   .subscribe(array => {
    //     array.forEach(data => {
    //       const player = new Player(
    //         data[12],
    //         data[3],
    //         data[13],
    //         data[0],
    //         data[14],
    //         data[4],
    //         data[5],
    //         data[6],
    //         data[7]
    //       );
    //       this.roster.push(player);
    //     });
    //   });

  }

  @Input() filterByName: string;

}
