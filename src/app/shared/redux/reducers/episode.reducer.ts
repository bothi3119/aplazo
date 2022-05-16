import { createReducer, on } from '@ngrx/store';
import * as EPISODE_ACTIONS from '../actions/episode.actions';
import { GeneralStatusStoreInterface } from '../interfaces';

/**
 * Constant that represents the initial state which is of type GeneralStatusStoreInterface.
 *
 */
const initialState: GeneralStatusStoreInterface = {
  isSuccess: false,
  isError: false,
  data: [],
  dataError: [],
  last_update: Date.now(),
};

/**
 * Constant that create the reducer to episode.
 *
 */
const episodeReducer = createReducer(
  initialState,
  on(EPISODE_ACTIONS.FAILED_EPISODE, (state, { payload }) => ({
    ...state,
    isError: true,
    dataError: payload,
  })),
  on(EPISODE_ACTIONS.REQUEST_EPISODE, (state) => ({
    ...state,
  })),
  on(EPISODE_ACTIONS.SIGNOFF_EPISODE, (state) => ({
    ...state,
    ...initialState,
  })),
  on(EPISODE_ACTIONS.SUCCESS_EPISODE, (state, { payload }) => ({
    ...state,
    isSuccess: true,
    last_update: Date.now(),
    data: payload,
  }))
);

/**
 * export funtion to account reducer
 *
 * @export
 * @param {*} state
 * @param {*} action
 * @returns
 */
export function EpisodeReducer(state: any, action: any) {
  return episodeReducer(state, action);
}
