import { Action } from '@ngrx/store';
import { Tile } from './tile.model';

export const REVEAL_TILE_CELL = '[Game] Reveal Tile Cell';

export class RevealTileCell implements Action {
  readonly type = REVEAL_TILE_CELL;
  constructor(public payload: Tile) {}
}

export type GameActions = RevealTileCell;
