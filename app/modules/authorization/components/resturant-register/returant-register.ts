import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { RouterExtensions } from "nativescript-angular/router";

import { RegisterationModel } from '../../../../proxy'

@Component({
    selector: 'epw-resturant-register',
    moduleId: module.id,
    templateUrl: './returant-register.html',
    styleUrls: ['returant-register.css']
})

export class ReturantRegister {
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