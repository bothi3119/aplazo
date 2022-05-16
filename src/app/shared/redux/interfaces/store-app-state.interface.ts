import { GeneralStatusStoreInterface } from './general-status-store.interface';

/*
 * Interface in which all the interfaces of the
 * Reduce will be listed where the key will represent the name of the microservice
 * the value will refer to the general interface that all MS will have
 * */
export interface StoreAppStateInterface {
  /**
   * Character information stored.
   *
   * @type {GeneralStatusStoreInterface}
   * @memberof StoreAppStateInterface
   */
  character?: GeneralStatusStoreInterface;

  /**
   * Location information stored.
   *
   * @type {GeneralStatusStoreInterface}
   * @memberof StoreAppStateInterface
   */
  location?: GeneralStatusStoreInterface;

  /**
   * Episode information stored.
   *
   * @type {GeneralStatusStoreInterface}
   * @memberof StoreAppStateInterface
   */
  episode?: GeneralStatusStoreInterface;
}
