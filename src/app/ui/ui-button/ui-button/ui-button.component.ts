import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, Optional, } from '@angular/core';
import { KitClassService } from '@ngx-kit/core';
import { UiButtonGroupComponent } from '../ui-button-group/ui-button-group.component';
import { UiButtonColor, UiButtonSize, UiButtonType } from '../meta';

/**
 * @apiOrder 1
 */
@Component({
  // tslint:disable-next-line
  selector: 'button[uiButton],a[uiButton]',
  template: `
    <kit-icon *ngIf="icon" [name]="icon" class="icon"></kit-icon>
    <ng-content></ng-content>
  `,
  styleUrls: ['./ui-button.component.scss'],
  providers: [
    KitClassService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiButtonComponent implements OnInit, OnChanges {
  @Input() color: UiButtonColor = 'default';

  @Input() disabled = false;

  @Input() icon: string;

  @Input() uiButton: void;

  @Input() size: UiButtonSize = 'm';

  @Input() type: UiButtonType = 'default';

  constructor(private kitClass: KitClassService,
              @Optional() private group: UiButtonGroupComponent) {
  }

  ngOnChanges() {
    this.applyClass();
  }

  ngOnInit() {
    this.applyClass();
  }

  private applyClass() {
    this.kitClass.apply({
      disabled: this.disabled,
      color: this.color,
      size: this.size,
      type: this.type,
      withIcon: !!this.icon,
      groupDirection: !!this.group ? this.group.direction : null,
    });
  }
}
