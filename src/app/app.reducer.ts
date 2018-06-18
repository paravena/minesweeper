import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromGame from './game/game.reducer';

export interface State {
  game: fromGame.State;
}

export const reducers: ActionReducerMap<State> = {
  game: fromGame.gameReducer
};

export const getGameState = createFeatureSelector<fromGame.State>('game');
export const getTiles = createSelector(getGameState, fromGame.getTiles);

