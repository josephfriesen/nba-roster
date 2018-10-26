import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { NameFilterPipe } from './name-filter.pipe';
import { PlayerDisplayComponent } from './player-display/player-display.component';
import { AllPlayersComponent } from './all-players/all-players.component';

declare var require: any;

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    SearchPanelComponent,
    PlayerListComponent,
    NameFilterPipe,
    PlayerDisplayComponent,
    AllPlayersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
