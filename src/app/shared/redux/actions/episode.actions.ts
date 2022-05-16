import { createAction, props } from '@ngrx/store';

/**
 * Actions for episode REQUEST
 */
export const REQUEST_EPISODE = createAction('[Episode] REQUEST');
/**
 * Actions for episode SUCCESS
 */
export const SUCCESS_EPISODE = createAction(
  '[Episode] SUCCESS',
  props<{ payload: any }>()
);
/**
 * Actions for episode FAILED
 */
export const FAILED_EPISODE = createAction(
  '[Episode] FAILED',
  props<{ payload: any }>()
);
/**
 * Actions for episode SIGNOFF
 */
export const SIGNOFF_EPISODE = createAction('[Episode] SIGNOFF');
