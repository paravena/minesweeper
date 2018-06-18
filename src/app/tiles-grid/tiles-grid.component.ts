import { Component, OnInit } from '@angular/core';
import { GameService } from '../game/game.service';
import { Tile } from '../game/tile.model';
import { Store } from '@ngrx/store';
import * as fromRoot from '../app.reducer';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-tiles-grid',
  templateUrl: './tiles-grid.component.html',
  styleUrls: ['./tiles-grid.component.css']
})
export class TilesGridComponent implements OnInit {
  tiles$: Observable<Array<Tile>>;

  constructor(private gameService: GameService,
              private store: Store<fromRoot.State>) {
  }

  ngOnInit() {
    this.tiles$ = this.store.select(fromRoot.getTiles);
  }
}
