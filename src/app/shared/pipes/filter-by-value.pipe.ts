import { Pipe, PipeTransform } from '@angular/core';
import { JSONPath } from 'jsonpath-plus';

/**
 * Pipe to search an object or array using jpsonpath.
 *
 * @export
 * @class FilterPipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: 'filterByValue',
})
export class FilterByValuePipe implements PipeTransform {
  /**
   * Method that filters the search.
   *
   * @param {(any | any[])} value - Searched element.
   * @param {string} searchText - Search by text.
   * @param {...string[]} searchFields - Search by fields.
   * @returns {*} - Found value.
   * @memberof FilterPipe
   */
  transform(
    value: any | any[],
    searchText: string,
    ...searchFields: string[]
  ): any {
    if (value && searchText) {
      if (Array.isArray(value)) {
        return value.filter((v) =>
          this.isMatching(v, searchText, ...searchFields)
        );
      } else if (this.isMatching(value, searchText, ...searchFields)) {
        return value;
      }
    }
    return value;
  }

  /**
   * Method to find matches.
   *
   * @private
   * @param {*} value - Searched element.
   * @param {string} searchText - Search by text.
   * @param {...string[]} args - Search by args.
   * @returns {boolean} - Matches with value.
   * @memberof FilterPipe
   */
  private isMatching(
    value: any,
    searchText: string,
    ...args: string[]
  ): boolean {
    if (args && args.length) {
      return args.some((arg) => {
        const queries = JSONPath({ json: value, path: arg });
        return queries
          .map((q: any) => q?.toLowerCase())
          .some((v: any) =>
            new RegExp('.*' + searchText.toLowerCase() + '.*', 'g').test(v)
          );
      });
    } else {
      return new RegExp('.*' + searchText.toLowerCase() + '.*', 'g').test(
        value.toLowerCase()
      );
    }
  }
}
