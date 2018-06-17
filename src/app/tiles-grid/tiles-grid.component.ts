import { Component, OnInit } from '@angular/core';
import { GameService } from '../game/game.service';
import {Tile} from '../game/tile.model';

@Component({
  selector: 'tiles-grid',
  templateUrl: './tiles-grid.component.html',
  styleUrls: ['./tiles-grid.component.css']
})
export class TilesGridComponent implements OnInit {
  tiles: Array<Tile>;

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.tiles = this.gameService.initGame();
  }

}
