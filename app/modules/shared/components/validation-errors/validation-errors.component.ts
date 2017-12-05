import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';

@Component({
  selector: 'epw-validation-errors',
  moduleId: module.id,
  templateUrl: './validation-errors.component.html',
  styleUrls: ['./validation-errors.component.css']
})
export class ValidationErrorsComponent {
  _errorsList: { errorType: string, params: any }[] = [];

  @Input() form: FormGroup;

  @Input() set extraErrorMessage(msg: string) {
    if (msg) {
      this._errorsList.push({ errorType: msg, params: null });
    }
  }

  @Input() set submit(val: { validate: boolean }) {
    this._errorsList = [];
    let _errorsList = [];
    if (val.validate) {
      _errorsList = this._buildErrorsListFromControls(this.form.controls);
    }
    setTimeout(() => {
      this._errorsList = _errorsList;
      this.ref.detectChanges();
    }, 0);
  }

  _buildErrorsListFromControls(formControls: { [prop: string]: AbstractControl }) {
    const _errorsList = [];
    if (formControls) {
      this.translateService.get(_.keys(formControls)).take(1).subscribe(translatedProps => {
        _.each(formControls, (ctrl: AbstractControl, propName: string) => {
          if (ctrl.invalid) {
            _.each(ctrl.errors, (errParam, err) => {
              _errorsList.push({
                errorType: err,
                params: {
                  ...errParam,
                  propery: translatedProps[propName]
                }
              })
            });
          }
        });
      });
    }
    return _errorsList;
  }

  constructor(private ref: ChangeDetectorRef, private translateService: TranslateService) {
  }
}
