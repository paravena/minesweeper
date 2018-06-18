import { Action } from '@ngrx/store';

export const REVEAL_TILE_CELL = '[Game] Reveal Tile Cell';

export class RevealTileCell implements Action {
  readonly type = REVEAL_TILE_CELL;
  constructor(public payload: number) {}
}

export type GameActions = RevealTileCell;
