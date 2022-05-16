import { createReducer, on } from '@ngrx/store';
import * as CHARACTER_ACTIONS from '../actions/character.actions';
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
 * Constant that create the reducer to character.
 *
 */
const characterReducer = createReducer(
  initialState,
  on(CHARACTER_ACTIONS.FAILED_CHARACTER, (state, { payload }) => ({
    ...state,
    isError: true,
    dataError: payload,
  })),
  on(CHARACTER_ACTIONS.REQUEST_CHARACTER, (state) => ({
    ...state,
  })),
  on(CHARACTER_ACTIONS.SIGNOFF_CHARACTER, (state) => ({
    ...state,
    ...initialState,
  })),
  on(CHARACTER_ACTIONS.SUCCESS_CHARACTER, (state, { payload }) => ({
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
export function CharacterReducer(state: any, action: any) {
  return characterReducer(state, action);
}
