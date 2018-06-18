import { Tile } from './tile.model';
import {GameActions, REVEAL_TILE_CELL} from './game.actions';
import * as minesWeeper from './minesweeper';

export interface State {
  tiles: Array<Tile>;
}

const initialState: State = {
  tiles: minesWeeper.initGame()
};

export function gameReducer(state = initialState, action: GameActions) {
  switch (action.type) {
    case REVEAL_TILE_CELL:
      state.tiles = minesWeeper.revealTile(action.payload, state.tiles);
      return {
        ...state
      };
    default:
      return state;
  }
}

export const getTiles = (state: State) => state.tiles;
