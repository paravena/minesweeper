import * as R from 'ramda';
import { Tile } from './tile.model';

const NUMBER_OF_ROWS = 16;
const NUMBER_OF_COLS = 16;
const NUMBER_OF_MINES = 64;

const newMineTile = () => {
  return {isMine: true, visible: false} as Tile;
};

const newTile = () => {
  return {isMine: false, visible: false, mineCounter: 0} as Tile;
};

const initTiles = (rows: number, cols: number, mines: number) => {
  let tiles = R.times(newMineTile, mines);
  tiles = shuffle(R.concat(R.times(newTile, rows * cols - mines), tiles));
  return tiles;
};

const shuffle = (tiles: Array<Tile>) => {
  return R.sort(() => Math.random() - 0.5, tiles);
};

const indexExists = R.both(R.lte(0), R.gte( NUMBER_OF_COLS * NUMBER_OF_ROWS - 1));
const isAMine = R.curry((tiles: Array<Tile>, index: number) => tiles[index].isMine);
const tileIsAMine = (tile: Tile) => tile.isMine;
const tileIsNotAMine = R.compose(R.not, tileIsAMine);
const tileIsVisible = (tile: Tile) => tile.visible;
const isNotVisible = R.curry((tiles: Array<Tile>, index: number) => !tiles[index].visible);
const setTileVisible = (tile: Tile) => tile.visible = true;

const indexExistAndHasNotBeenRevealed = R.curry((tiles: Array<Tile>, index: number) => {
  return R.both(indexExists, isNotVisible(tiles))(index);
});

const getTileIfExistAndNotBeenRevealed = R.curry((tiles: Array<Tile>, index: number): Tile => {
  const tile = R.ifElse(indexExistAndHasNotBeenRevealed(tiles), (idx: number) => tiles[idx], () => null)(index);
  R.ifElse(notNil, () => tile.index = index, R.empty)(tile);
  return tile;
});

const isEEdge = (index: number) => index % NUMBER_OF_COLS === NUMBER_OF_COLS - 1;
const isWEdge = (index: number) => index % NUMBER_OF_COLS === 0;

const n = (tiles: Array<Tile>, index: number) => {
  return getTileIfExistAndNotBeenRevealed(tiles, index - NUMBER_OF_COLS);
};

const s = (tiles: Array<Tile>, index: number) => {
  return getTileIfExistAndNotBeenRevealed(tiles, index + NUMBER_OF_COLS);
};

const e = (tiles: Array<Tile>, index: number) => {
  return R.ifElse(isEEdge, () => null, () => getTileIfExistAndNotBeenRevealed(tiles, index + 1))(index);
};

const w = (tiles: Array<Tile>, index: number) => {
  return R.ifElse(isWEdge, () => null, () => getTileIfExistAndNotBeenRevealed(tiles, index - 1))(index);
};

const se = (tiles: Array<Tile>, index: number) => {
  return R.ifElse(isEEdge, () => null, () => getTileIfExistAndNotBeenRevealed(tiles, index + NUMBER_OF_COLS + 1))(index);
};

const sw = (tiles: Array<Tile>, index: number) => {
  return R.ifElse(isWEdge, () => null, () => getTileIfExistAndNotBeenRevealed(tiles, index + NUMBER_OF_COLS - 1))(index);
};

const ne = (tiles: Array<Tile>, index: number) => {
  return R.ifElse(isEEdge, () => null, () => getTileIfExistAndNotBeenRevealed(tiles, index - NUMBER_OF_COLS + 1))(index);
};

const nw = (tiles: Array<Tile>, index: number) => {
  return R.ifElse(isWEdge, () => null, () => getTileIfExistAndNotBeenRevealed(tiles, index - NUMBER_OF_COLS - 1))(index);
};

const notNil = R.compose(R.not, R.isNil);

const DIRECTIONS = [nw, n, ne, e, se, s, sw, w];

const neighbors = R.curry((tiles: Array<Tile>, index: number): Array<Tile> => {
  const getTileFromDir = (dir) => {
    return dir(tiles, index);
  };
  return R.filter(notNil, R.map(getTileFromDir, DIRECTIONS));
});

const getMineCounter = (tiles: Array<Tile>, index: number) => {
  return R.length(R.filter(tileIsAMine, neighbors(tiles, index)));
};

const isWinGame = (tiles: Array<Tile>) => {
  const numberOfVisibleTiles = R.filter(R.both(tileIsNotAMine, tileIsVisible), tiles).length;
  return numberOfVisibleTiles === NUMBER_OF_COLS * NUMBER_OF_ROWS - NUMBER_OF_MINES;
};

const isGameOver = (tiles: Array<Tile>) => {
  const numberOfVisibleTiles = R.filter(R.both(tileIsAMine, tileIsVisible), tiles).length;
  return numberOfVisibleTiles > 0;
};

const revealAdjacentTiles = R.curry((tiles: Array<Tile>, index: number) => {
  const mineCounter = getMineCounter(tiles, index);
  tiles[index].mineCounter = mineCounter;
  tiles[index].visible = true;
  const processAdjacentTiles = () => {
    return R.reduce((tilesGrid: Array<Tile>, tile: Tile) => {
      return R.ifElse(isNotVisible(tilesGrid), revealAdjacentTiles(tilesGrid), () => tilesGrid)(tile.index);
    }, tiles)(R.filter(tileIsNotAMine, neighbors(tiles, index)));
  };
  tiles = R.ifElse(R.equals(0), processAdjacentTiles, () => tiles)(mineCounter);
  return tiles.slice();
});

const gameOver = R.curry((tiles: Array<Tile>, index: number) => {
  R.forEach(setTileVisible, R.filter(tileIsAMine, tiles));
  return tiles.slice();
});

export const initGame = () => {
  return initTiles(NUMBER_OF_ROWS, NUMBER_OF_COLS, NUMBER_OF_MINES);
};

export const revealTile = (index: number, tiles: Array<Tile>) => {
  tiles[index].visible = true;
  tiles = R.ifElse(isAMine(tiles), gameOver(tiles), revealAdjacentTiles(tiles))(index);
  const status = isGameOver(tiles) ? 'game over' : isWinGame(tiles) ? 'win' : 'play';
  return {
    tiles,
    status
  };
};

