import { createReducer, on } from '@ngrx/store';
import * as LOCATION_ACTIONS from '../actions/location.actions';
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
 * Constant that create the reducer to location.
 *
 */
const locationReducer = createReducer(
  initialState,
  on(LOCATION_ACTIONS.FAILED_LOCATION, (state, { payload }) => ({
    ...state,
    isError: true,
    dataError: payload,
  })),
  on(LOCATION_ACTIONS.REQUEST_LOCATION, (state) => ({
    ...state,
  })),
  on(LOCATION_ACTIONS.SIGNOFF_LOCATION, (state) => ({
    ...state,
    ...initialState,
  })),
  on(LOCATION_ACTIONS.SUCCESS_LOCATION, (state, { payload }) => ({
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
export function LocationReducer(state: any, action: any) {
  return locationReducer(state, action);
}
