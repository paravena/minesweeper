import { Action } from '@ngrx/store';

export const REVEAL_TILE_CELL = '[Game] Reveal Tile Cell';
export const START_NEW_GAME = '[Game] Start New Game';

export class RevealTileCell implements Action {
  readonly type = REVEAL_TILE_CELL;
  constructor(public payload: number) {}
}

export class StartNewGame implements Action {
  readonly type = START_NEW_GAME;
}

export type GameActions = RevealTileCell | StartNewGame;
