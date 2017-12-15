import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { MembershipCredentialsModel } from '../../../../proxy';

@Component({
  selector: 'epw-login-form',
  moduleId: module.id,
  templateUrl: './login-form.component.html',
  styleUrls: ['login-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {
  _errorMessage: string;

  @Output() loginEvent = new EventEmitter<MembershipCredentialsModel>();
  @Input() errorMessage: string;
  @Input() showLoading: boolean;

  theForm: FormGroup;
  submit$: BehaviorSubject<{ validate: boolean }>;

  constructor(private formBuilder: FormBuilder) {
    this.theForm = this.formBuilder.group({
      'authorization.login.email': ['', [Validators.required]],
      'authorization.login.password': ['', Validators.required]
    });
    this.submit$ = new BehaviorSubject({ validate: false });
  }

  onClick(): void {
    if (this.theForm.valid) {
      this.loginEvent.emit({
        email: this.theForm.value['authorization.login.email'],
        password: this.theForm.value['authorization.login.password']
      });
      this.submit$.next({ validate: false });
    } else {
      this.submit$.next({ validate: true });
    }
  }
}
