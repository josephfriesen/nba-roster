import { Player } from './player.model';
const playerData = require('./nba-all-players.json');

export const giannis = new Player(playerData.players[14][12], playerData.players[14][3], playerData.players[14][13], playerData.players[14][0], playerData.players[14][14], playerData.players[14][4], playerData.players[14][5], playerData.players[14][6], playerData.players[14][7]);

/*
constructor(id, name, lastName, teamID, teamAbr, jerseyNum, pos, height, weight) {


"headers": [
  0 "teamID",
  1 "Season",
  2 "Don't Know",
  3 "Name",
  4 "Number",
  5 "Position",
  6 "Height",
  7 "Weight",
  8 "Birthdate",
  9 "Don't Know",
  10 "Don't Know",
  11 "College",
  12 "PlayerID",
  13 "Last name, first name",
  14 "Team Abbreviation"
],

Giannis: playerData.players[14] =
[
  1610612749,
  "2018",
  "00",
  "Giannis Antetokounmpo",
  "34",
  "F",
  "6-11",
  "242",
  "DEC 06, 1994",
  23,
  "5",
  "Greece",
  203507,
  "Antetokounmpo, Giannis",
  "MIL"
],

*/
