import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TilesGridComponent } from './tiles-grid/tiles-grid.component';
import { GameService } from './game/game.service';
import { TileComponent } from './tile/tile.component';
import { StoreModule } from '@ngrx/store';
import { MatButtonModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { reducers} from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TilesGridComponent,
    TileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
