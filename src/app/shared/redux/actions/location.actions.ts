import { createAction, props } from '@ngrx/store';

/**
 * Actions for location REQUEST
 */
export const REQUEST_LOCATION = createAction('[Location] REQUEST');
/**
 * Actions for location SUCCESS
 */
export const SUCCESS_LOCATION = createAction(
  '[Location] SUCCESS',
  props<{ payload: any }>()
);
/**
 * Actions for location FAILED
 */
export const FAILED_LOCATION = createAction(
  '[Location] FAILED',
  props<{ payload: any }>()
);
/**
 * Actions for location SIGNOFF
 */
export const SIGNOFF_LOCATION = createAction('[Location] SIGNOFF');
