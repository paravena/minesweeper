import { Component, OnInit } from '@angular/core';
import * as fromRoot from './app.reducer';
import { Store } from '@ngrx/store';
import { GameService } from 'app/game/game.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private gameService: GameService,
              private store: Store<fromRoot.State>, private snackBar: MatSnackBar) {
  }

  startNewGame() {
    this.gameService.startNewGame();
  }

  ngOnInit(): void {
    this.store.select(fromRoot.getStatus).subscribe((status: string) => {
      if (status === 'game over') {
        this.snackBar.open('Game Over', null, {
          duration: 3000
        });
      } else if (status === 'win') {
        this.snackBar.open('You win!!!', null, {
          duration: 3000
        });
      }
    });
  }
}
