import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../app.reducer';
import * as Game from '../game/game.actions';

@Injectable()
export class GameService {
  constructor(private store: Store<fromRoot.State>) {
  }

  revealTile(tileIndex: number) {
    this.store.dispatch(new Game.RevealTileCell(tileIndex));
  }

  startNewGame() {
    this.store.dispatch(new Game.StartNewGame());
  }
}
