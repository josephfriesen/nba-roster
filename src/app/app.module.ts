import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { NameFilterPipe } from './name-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SearchPanelComponent,
    PlayerListComponent,
    NameFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
