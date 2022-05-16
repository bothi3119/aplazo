import { Component, OnInit } from '@angular/core';
import { Unsubscriber } from '../shared/classes/unsubscriber.class';
import { RickMortySandbox } from '../shared/sandbox/rick-morty.sandbox';
import { takeUntil } from 'rxjs';

/**
 *
 *
 * @export
 * @enum {number}
 */
export enum TYPE_CHIP {
  CHARACTER = 'character',
  LOCATION = 'location',
  EPISODE = 'episode',
}

@Component({
  selector: 'app-rick-and-morty-view',
  templateUrl: './rick-and-morty-view.component.html',
  styleUrls: ['./rick-and-morty-view.component.scss'],
})
export class RickAndMortyViewComponent extends Unsubscriber implements OnInit {
  constructor(private _rickMortySandbox: RickMortySandbox) {
    super();
  }

  /**
   *
   *
   * @type {*}
   * @memberof RickAndMortyViewComponent
   */
  public characterData: any;

  /**
   *
   *
   * @type {*}
   * @memberof RickAndMortyViewComponent
   */
  public locationData: any;

  /**
   *
   *
   * @type {*}
   * @memberof RickAndMortyViewComponent
   */
  public episodeData: any;

  /**
   * Search data by @Output() value
   *
   * @type {string}
   * @memberof RickAndMortyViewComponent
   */
  public searchData: string = ' ';

  /**
   * Name select.
   *
   * @type {string}
   * @memberof RickAndMortyViewComponent
   */
  public name: string = '';

  /**
   * FLow.
   *
   * @type {string}
   * @memberof RickAndMortyViewComponent
   */
  public flow: string = '';

  /**
   * Flow enum.
   *
   * @memberof RickAndMortyViewComponent
   */
  public FLOW_ENUM = TYPE_CHIP;

  /**
   * Is select chip.
   *
   * @readonly
   * @memberof RickAndMortyViewComponent
   */
  get isSelectChip() {
    return (
      this.flow === TYPE_CHIP.CHARACTER ||
      this.flow === TYPE_CHIP.LOCATION ||
      this.flow === TYPE_CHIP.EPISODE ||
      false
    );
  }

  /**
   * Handle character data.
   *
   * @private
   * @memberof RickAndMortyViewComponent
   */
  private _handleCharacterResponse() {
    this._rickMortySandbox.character$
      .pipe(takeUntil(this._destroyed$))
      .subscribe((response) => {
        if (response) {
          this.characterData = response.results;
        }
      });
  }

  /**
   * Handle location data.
   *
   * @private
   * @memberof RickAndMortyViewComponent
   */
  private _handleLocationResponse() {
    this._rickMortySandbox.location$
      .pipe(takeUntil(this._destroyed$))
      .subscribe((response) => {
        if (response) {
          this.locationData = response.results;
        }
      });
  }

  /**
   * Handle episode data.
   *
   * @private
   * @memberof RickAndMortyViewComponent
   */
  private _handleEpisodeResponse() {
    this._rickMortySandbox.episode$
      .pipe(takeUntil(this._destroyed$))
      .subscribe((response) => {
        if (response) {
          this.episodeData = response.results;
        }
      });
  }

  /**
   * Action chip event.
   *
   * @param {string} action
   * @memberof RickAndMortyViewComponent
   */
  public actionChip(action: string) {
    this.flow = action;
    this.name = '';
    if (action === TYPE_CHIP.CHARACTER) {
      this._rickMortySandbox.getCharacterByStore();
    }
    if (action === TYPE_CHIP.LOCATION) {
      this._rickMortySandbox.getLocationByStore();
    }
    if (action === TYPE_CHIP.EPISODE) {
      this._rickMortySandbox.getEpisodeByStore();
    }
  }

  /**
   * Get selected name.
   *
   * @param {string} evt
   * @memberof RickAndMortyViewComponent
   */
  public getOnClickEvent(evt: { name: string; flow: string }) {
    this.name = evt.name;
    if (evt.flow) {
      this.actionChip(evt.flow);
    }
  }

  /**
   * Get search value.
   *
   * @param {*} evt
   * @memberof RickAndMortyViewComponent
   */
  public getSearchValue(evt: any) {
    this.searchData = evt;
  }

  /**
   *
   *
   * @memberof RickAndMortyViewComponent
   */
  ngOnInit(): void {
    this._handleCharacterResponse();
    this._handleLocationResponse();
    this._handleEpisodeResponse();
  }
}
