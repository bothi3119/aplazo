import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RickMortyService {
  /**
   * Creates an instance of RickMortyService .
   * @param {HttpClient} _httpClient
   * @memberof RickMortyService
   */
  constructor(private _httpClient: HttpClient) {}

  /**
   * Base url.
   *
   * @private
   * @memberof RickMortyService
   */
  private _baseUrl = 'https://rickandmortyapi.com/api';

  /**
   * Get character.
   *
   * @return {*}
   * @memberof RickMortyService
   */
  public getCharacter() {
    return this._httpClient.get(`${this._baseUrl}/character`);
  }

  /**
   * Get location.
   *
   * @return {*}
   * @memberof RickMortyService
   */
  public getLocation() {
    return this._httpClient.get(`${this._baseUrl}/location`);
  }

  /**
   * Get episode.
   *
   * @return {*}
   * @memberof RickMortyService
   */
  public getEpisode() {
    return this._httpClient.get(`${this._baseUrl}/episode`);
  }
}
