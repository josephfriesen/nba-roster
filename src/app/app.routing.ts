import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPlayersComponent } from './all-players/all-players.component';
import { PlayerStatsComponent } from './player-stats/player-stats.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AllPlayersComponent
  },
  {
    path: 'player/:ID',
    component: PlayerStatsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
