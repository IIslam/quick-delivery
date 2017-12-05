import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { RouterExtensions } from "nativescript-angular/router";

import { RegisterationModel } from '../../../../proxy'

@Component({
    selector: 'epw-register-form',
    moduleId: module.id,
    templateUrl: './registeration-form.html'
})

export class RegisterationForm {
    user: RegisterationModel = {
        fullname: '',
        password: '',
        mobile: '',
        identification: ''
    };
    @Output() RegisterEvent = new EventEmitter<any>();

    register(user): void {
        this.RegisterEvent.emit(this.user);
    }

}