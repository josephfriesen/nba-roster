export class Player {
  ID: number;
  name: string;
  lastNameFirstName: string;
  teamID: number;
  teamAbr: string;
  jerseyNum: string;
  pos: string;
  height: string;
  weight: string;
  profileURL: string;
  profileImgURL: string;
  teamImgURL: string;

  constructor(id, name, lastName, teamID, teamAbr, jerseyNum, pos, height, weight) {
    this.ID = id;
    this.name = name;
    this.lastNameFirstName = lastName;
    this.teamAbr = teamAbr;
    this.jerseyNum = jerseyNum;
    this.pos = pos;
    this.height = height;
    this.weight = weight;

    const nameArr = name.split(' ');
    this.profileURL = `http://www.nba.com/players/${nameArr[0]}/${nameArr[1]}/${id}`;
    this.profileImgURL = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${id}.png`;
    this.teamImgURL = `https://www.nba.com/assets/logos/teams/primary/web/${this.teamAbr}.svg`
  }
}
