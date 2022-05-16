import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  /**
   * Creates an instance of SearchComponent.
   * @memberof SearchComponent
   */
  constructor() {
    this.dataForm = this._createForm();
  }
  /**
   * Data form
   *
   * @type {FormGroup}
   * @memberof SearchComponent
   */
  public dataForm: FormGroup;

  /**
   * Search event.
   *
   * @type {EventEmitter<string>}
   * @memberof SearchComponent
   */
  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Create form value.
   *
   * @protected
   * @return {*}
   * @memberof SearchComponent
   */
  protected _createForm() {
    return new FormGroup({
      search: new FormControl(''),
    });
  }

  /**
   * Hanldle value at form.
   *
   * @private
   * @memberof SearchComponent
   */
  private _handleFormValue() {
    this.dataForm.valueChanges.subscribe((value) => {
      if (value.search) {
        this.searchEvent.emit(value.search);
      }
    });
  }

  /**
   *
   *
   * @memberof SearchComponent
   */
  ngOnInit(): void {
    this._handleFormValue();
  }
}
