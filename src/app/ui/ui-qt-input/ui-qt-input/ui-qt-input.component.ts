import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs/Subject';

export const KIT_QT_INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => UiQtInputComponent),
  multi: true,
};

@Component({
  selector: 'ui-qt-input',
  templateUrl: './ui-qt-input.component.html',
  styleUrls: ['./ui-qt-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [KIT_QT_INPUT_VALUE_ACCESSOR],
})
export class UiQtInputComponent implements ControlValueAccessor, OnInit, OnChanges {
  @Input() max: number | null = null;

  @Input() min: number | null = 0;

  viewState: number;

  private changes$ = new Subject<number>();

  private disabled = false;

  private state: number;

  private touches$ = new Subject<void>();

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnChanges() {
  }

  ngOnInit() {
  }

  minus() {
    if (this.min === null || this.state > this.min) {
      this.update(this.state - 1);
    }
  }

  plus() {
    if (this.max === null || this.state < this.max) {
      this.update(this.state + 1);
    }
  }

  registerOnChange(fn: any) {
    this.changes$.subscribe(fn);
  }

  registerOnTouched(fn: any) {
    this.touches$.subscribe(fn);
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(rawValue: number): void {
    this.update(rawValue);
    this.cdr.markForCheck();
  }

  private update(state: number) {
    this.state = state;
    this.viewState = state;
  }
}
