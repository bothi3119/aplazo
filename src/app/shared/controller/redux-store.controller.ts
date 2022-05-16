import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Unsubscriber } from '../classes/unsubscriber.class';
import { StoreAppStateInterface } from '../redux/interfaces/store-app-state.interface';
import { GeneralStatusStoreInterface } from '../redux/interfaces/general-status-store.interface';

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
 * Redux controller.
 *
 * @export
 * @class ReduxStoreController
 * @implements {OnDestroy}
 */
@Injectable({
  providedIn: 'root',
})
export class ReduxStoreController extends Unsubscriber {
  constructor(private _store: Store<StoreAppStateInterface>) {
    super();
    this._handleLocationStore();
    this._handleCharacterStore();
    this._handleEpisodeStore();
  }

  /**
   *
   *
   * @type {*}
   * @memberof ReduxStoreController
   */
  public characterStore: GeneralStatusStoreInterface = initialState;

  /**
   *
   *
   * @type {*}
   * @memberof ReduxStoreController
   */
  public locationStore: GeneralStatusStoreInterface = initialState;

  /**
   *
   *
   * @type {*}
   * @memberof ReduxStoreController
   */
  public episodeStore: GeneralStatusStoreInterface = initialState;

  /**
   * Handle character store.
   *
   * @private
   * @memberof ReduxStoreController
   */
  private _handleCharacterStore() {
    this._store
      .select('character')
      .pipe(takeUntil(this._destroyed$))
      .subscribe((response: any) => {
        this.characterStore = response;
      });
  }

  /**
   * Handle location store.
   *
   * @private
   * @memberof ReduxStoreController
   */
  private _handleLocationStore() {
    this._store
      .select('location')
      .pipe(takeUntil(this._destroyed$))
      .subscribe((response: any) => {
        this.locationStore = response;
      });
  }

  /**
   * Handle episode store.
   *
   * @private
   * @memberof ReduxStoreController
   */
  private _handleEpisodeStore() {
    this._store
      .select('episode')
      .pipe(takeUntil(this._destroyed$))
      .subscribe((response: any) => {
        this.episodeStore = response;
      });
  }
}
