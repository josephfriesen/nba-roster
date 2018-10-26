export default class StatsQuery {
  id: number;

  constructor(playerId) {
    this.id = playerId;
  }

  getStats() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", `https://stats.nba.com/stats/playercareerstats?PlayerID=${this.id}&PerMode=PerGame`, true);
      request.send();
    });
  }
}
