import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StatsService {

  constructor(private http: Http) { }

  getStats(id: number) {
    return this.http.get(`https://stats.nba.com/stats/playercareerstats?PlayerID=${id}&PerMode=PerGame`)
  }

}
