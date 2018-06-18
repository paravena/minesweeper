import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TilesGridComponent } from './tiles-grid/tiles-grid.component';
import { GameService } from './game/game.service';
import { TileComponent } from './tile/tile.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from './app.reducer';


@NgModule({
  declarations: [
    AppComponent,
    TilesGridComponent,
    TileComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
