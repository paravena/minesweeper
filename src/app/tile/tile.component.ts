import {Component, Input, OnInit} from '@angular/core';
import { Tile } from '../game/tile.model';

@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  @Input() tile: Tile;

  constructor() { }

  ngOnInit() {
  }

}
