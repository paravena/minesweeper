import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TilesGridComponent } from './tiles-grid/tiles-grid.component';
import { GameService } from './game/game.service';
import { TileComponent } from './tile/tile.component';


@NgModule({
  declarations: [
    AppComponent,
    TilesGridComponent,
    TileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
