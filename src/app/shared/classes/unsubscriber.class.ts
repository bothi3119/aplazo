import { Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * 
 *
 * @export
 * @abstract
 * @class Unsubscriber
 * @implements {OnDestroy}
 */
@Directive()
export abstract class Unsubscriber implements OnDestroy {
  /**
   *
   *
   * @memberof Unsubscriber
   */
  _destroyed$ = new Subject<boolean>();
  /**
   *
   */
  ngOnDestroy() {
    this._destroyed$.next(true);
    this._destroyed$.complete();
  }
}
