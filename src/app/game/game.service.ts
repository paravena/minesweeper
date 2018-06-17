import {Injectable} from '@angular/core';
import * as minesWeeper from './minesweeper';

@Injectable()
export class GameService {
  constructor() {
  }

  public initGame() {
    return minesWeeper.initGame();
  }
}
