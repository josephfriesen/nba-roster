import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPlayersComponent } from './all-players/all-players.component'

const appRoutes: Routes = [
  {
    path: '',
    component: AllPlayersComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
