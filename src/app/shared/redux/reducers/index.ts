import { ActionReducerMap } from '@ngrx/store';
import { StoreAppStateInterface } from '../interfaces';
import * as Reducers from './all-imports';

/*
 * Constant that is declared in the AppModule
 * of the app and this will be where all our created reducer will be listed.
 * */
export const RickMortyAppReducers: ActionReducerMap<StoreAppStateInterface> = {
  character: Reducers.CharacterReducer,
  location: Reducers.LocationReducer,
  episode: Reducers.EpisodeReducer,
};
