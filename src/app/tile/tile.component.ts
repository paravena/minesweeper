import {Component, Input, OnInit} from '@angular/core';
import { Tile } from '../game/tile.model';
import { GameService } from '../game/game.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  @Input() tile: Tile;
  @Input() index: number;

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  revealTile() {
    this.gameService.revealTile(this.index);
  }
}
