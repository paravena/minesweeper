import * as R from 'ramda';
import {Tile} from './tile.model';

const NUMBER_OF_ROWS = 16;
const NUMBER_OF_COLS = 16;
const NUMBER_OF_MINES = 64;

const initTiles = (rows: number, cols: number, mines: number) => {
  let tiles = R.times(() => new Tile(true), mines);
  tiles = R.concat(R.times(() => new Tile(false), rows * cols - mines), tiles);
  return shuffle(tiles);
};

const shuffle = (tiles: Array<Tile>) => {
  return R.sort(() => Math.random() - 0.5, tiles);
};

export const initGame = () => {
  return initTiles(NUMBER_OF_ROWS, NUMBER_OF_COLS, NUMBER_OF_MINES);
};

export const revealTile = (tileIndex: number, tiles: Array<Tile>) => {
  tiles[tileIndex].visible = true;
  if (!tiles[tileIndex].isMine) {
    tiles[tileIndex].mineCounter++;
  }
  return tiles.slice();
};

