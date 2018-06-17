import {Tile} from './tile.model';
import {initGame} from './minesweeper';

export interface State {
  game: Array<Tile>;
};

const initialState: State = {
  game: initGame()
};

