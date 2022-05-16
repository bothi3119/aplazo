/*
 * Interface that represents the general form to be implemented in
 * each of the redurs to use
 *
 */
export interface GeneralStatusStoreInterface {
  /**
   * Indicates that the last query made was successful.
   *
   * @type {boolean}
   * @memberof GeneralWebInterface
   */
  isSuccess?: boolean;
  /**
   * Indicates that the last query made has an error response.
   *
   * @type {boolean}
   * @memberof GeneralWebInterface
   */
  isError?: boolean;
  /**
   * Data retrieve and saved in store.
   *
   * @type {*}
   * @memberof GeneralWebInterface
   */
  data?: any;
  /**
   * Data from error retrieve and saved in store.
   *
   * @type {*}
   * @memberof GeneralWebInterface
   */
  dataError?: any;
  /**
   * Last update of the data.
   *
   * @type {number}
   * @memberof GeneralWebInterface
   */
  last_update?: number;
}
