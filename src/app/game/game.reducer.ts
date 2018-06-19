import { Tile } from './tile.model';
import {GameActions, REVEAL_TILE_CELL, START_NEW_GAME} from './game.actions';
import * as minesWeeper from './minesweeper';

export interface State {
  tiles: Array<Tile>;
  status: string;
}

const initialState: State = {
  tiles: minesWeeper.initGame(),
  status: 'play'
};

export function gameReducer(state = initialState, action: GameActions) {
  switch (action.type) {
    case START_NEW_GAME:
      return {
        ...state,
        tiles: minesWeeper.initGame()
      };
    case REVEAL_TILE_CELL:
      return {
        ...state,
        ...minesWeeper.revealTile(action.payload, state.tiles)
      };
    default:
      return state;
  }
}

export const getTiles = (state: State) => state.tiles;
export const getStatus = (state: State) => state.status;
