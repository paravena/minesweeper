import * as R from 'ramda';
import {Tile} from './tile.model';

const NUMBER_OF_ROWS = 16;
const NUMBER_OF_COLS = 16;
const NUMBER_OF_MINES = 64;

const initTiles = (rows: number, cols: number, mines: number) => {
  return shuffle(R.concat(
    R.repeat({visible: false, isMine: true} as Tile, mines),
    R.repeat({visible: false, isMine: false} as Tile, rows * cols - mines)
  ));
};

const shuffle = (tiles: Array<Tile>) => {
  return R.sort(() => Math.random() - 0.5, tiles);
};

export const initGame = () => {
  return initTiles(NUMBER_OF_ROWS, NUMBER_OF_COLS, NUMBER_OF_MINES);
};
