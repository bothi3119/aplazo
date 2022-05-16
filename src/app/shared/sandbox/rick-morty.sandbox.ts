import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ReduxStoreController } from '../controller/redux-store.controller';
import { StoreAppStateInterface } from '../redux/interfaces/store-app-state.interface';
import * as ALL_ACTIONS from '../redux/actions/index';
import { Observable, Subject } from 'rxjs';
import { RickMortyService } from '../service/rick-morty.service';
@Injectable({
  providedIn: 'root',
})
export class RickMortySandbox extends ReduxStoreController {
  constructor(
    private store: Store<StoreAppStateInterface>,
    private _rickMortyService: RickMortyService
  ) {
    super(store);
  }

  /**
   * Character subject.
   *
   * @private
   * @type {Subject<any>}
   * @memberof RickMortySandbox
   */
  private _character$: Subject<any> = new Subject<any>();
  /**
   * Location subject.
   *
   * @private
   * @type {Subject<any>}
   * @memberof RickMortySandbox
   */
  private _location$: Subject<any> = new Subject<any>();
  /**
   * Episode subject.
   *
   * @private
   * @type {Subject<any>}
   * @memberof RickMortySandbox
   */
  private _episode$: Subject<any> = new Subject<any>();

  /**
   * Get character subject
   *
   * @readonly
   * @type {Observable<any>}
   * @memberof RickMortySandbox
   */
  get character$(): Observable<any> {
    return this._character$.asObservable();
  }

  /**
   * Get locationn subject.
   *
   * @readonly
   * @type {Observable<any>}
   * @memberof RickMortySandbox
   */
  get location$(): Observable<any> {
    return this._location$.asObservable();
  }

  /**
   * Get episode subject.
   *
   * @readonly
   * @type {Observable<any>}
   * @memberof RickMortySandbox
   */
  get episode$(): Observable<any> {
    return this._episode$.asObservable();
  }

  /**
   * Get character by service.
   *
   * @memberof RickMortySandbox
   */
  getCharacterByService() {
    this._rickMortyService.getCharacter().subscribe(
      (response) => {
        this.store.dispatch(
          ALL_ACTIONS.SUCCESS_CHARACTER({ payload: response })
        );
        this._character$.next(response);
      },
      (error) => {
        this.store.dispatch(ALL_ACTIONS.FAILED_CHARACTER({ payload: error }));
        this._character$.next(undefined);
      }
    );
  }

  /**
   *
   *
   * @memberof RickMortySandbox
   */
  getCharacterByStore() {
    this.characterStore.isSuccess
      ? this._character$.next(this.characterStore.data)
      : this.getCharacterByService();
  }

  /**
   * Get locationby service.
   *
   * @memberof RickMortySandbox
   */
  getLocationByService() {
    this._rickMortyService.getLocation().subscribe(
      (response) => {
        this.store.dispatch(
          ALL_ACTIONS.SUCCESS_LOCATION({ payload: response })
        );
        this._location$.next(response);
      },
      (error) => {
        this.store.dispatch(ALL_ACTIONS.FAILED_LOCATION({ payload: error }));
        this._location$.next(undefined);
      }
    );
  }

  /**
   *
   *
   * @memberof RickMortySandbox
   */
  getLocationByStore() {
    this.locationStore.isSuccess
      ? this._character$.next(this.locationStore.data)
      : this.getLocationByService();
  }

  /**
   * Get episode by service.
   *
   * @memberof RickMortySandbox
   */
  getEpisodeByService() {
    this._rickMortyService.getEpisode().subscribe(
      (response) => {
        this.store.dispatch(ALL_ACTIONS.SUCCESS_EPISODE({ payload: response }));
        this._episode$.next(response);
      },
      (error) => {
        this.store.dispatch(ALL_ACTIONS.FAILED_EPISODE({ payload: error }));
        this._episode$.next(undefined);
      }
    );
  }

  /**
   *
   *
   * @memberof RickMortySandbox
   */
  getEpisodeByStore() {
    this.episodeStore.isSuccess
      ? this._character$.next(this.episodeStore.data)
      : this.getEpisodeByService();
  }
}
