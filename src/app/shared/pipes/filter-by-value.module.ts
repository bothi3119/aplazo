import { NgModule } from '@angular/core';
import { FilterByValuePipe } from './filter-by-value.pipe';

/**
 * Declarations, providers and exports for export class FilterByValueModule {}
 *
 * @export
 * @class export class FilterByValueModule {}

 */
@NgModule({
  declarations: [FilterByValuePipe],
  providers: [FilterByValuePipe],
  exports: [FilterByValuePipe],
})
export class FilterByValueModule {}
