import {ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
const CUSTOM_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputSearchComponent),
  multi: true
};
type TypeAutoComplete = 'on' | 'off';
@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
  providers: [CUSTOM_CONTROL_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputSearchComponent implements ControlValueAccessor, OnInit {
  // tslint:disable-next-line:variable-name
  private _autocomplete: TypeAutoComplete = 'off';
  @Input() type = 'text';
  @Input() placeholder: string;
  @Input() set autocomplete(value: TypeAutoComplete ) {
    const valueType: string = value.toLocaleLowerCase();
    valueType === 'on' ? this._autocomplete  = 'on' : this._autocomplete = 'off';
  }
  get autocomplete(): TypeAutoComplete { return this._autocomplete; }
  private onTouch;
  private onChange;
  public value = '';

  constructor( private cdr: ChangeDetectorRef ) { }

  ngOnInit(): void {}

  // forms
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(obj: any): void {
    // write form
    if (obj) {
      this.value = obj || '';
      this.cdr.markForCheck();
    }
  }

  writeInputValue(event): void {
    const getValue = (event.target as HTMLInputElement).value;
    this.value = getValue;
    this.onChange(this.value);
    this.onTouch();
  }
}
