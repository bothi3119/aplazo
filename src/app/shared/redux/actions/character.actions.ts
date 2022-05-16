import { createAction, props } from '@ngrx/store';

/**
 * Actions for character REQUEST
 */
export const REQUEST_CHARACTER = createAction('[Character] REQUEST');
/**
 * Actions for character SUCCESS
 */
export const SUCCESS_CHARACTER = createAction(
  '[Character] SUCCESS',
  props<{ payload: any }>()
);
/**
 * Actions for character FAILED
 */
export const FAILED_CHARACTER = createAction(
  '[Character] FAILED',
  props<{ payload: any }>()
);
/**
 * Actions for character SIGNOFF
 */
export const SIGNOFF_CHARACTER = createAction('[Character] SIGNOFF');
