import { Injectable } from '@angular/core';
import { Tile } from './tile.model';
import { Store } from '@ngrx/store';
import * as fromRoot from '../app.reducer';
import * as Game from '../game/game.actions';

@Injectable()
export class GameService {
  constructor(private store: Store<fromRoot.State>) {
  }

  revealTile(tile: Tile) {
    this.store.dispatch(new Game.RevealTileCell(tile));
  }
}
